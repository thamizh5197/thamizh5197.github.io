(function() {
  if (localStorage.getItem('flashyMode') !== '1') return;
  if (document.querySelector('.f-root')) return; // already on flashy page

  // Apply dark theme immediately (before DOMContentLoaded)
  document.documentElement.setAttribute('data-theme', 'dark');

  document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('flashy-mode');

    // ── Background blobs
    var bg = document.createElement('div');
    bg.id = 'fim-bg';
    bg.innerHTML = '<div class="f-blob f-blob-1"></div>'
      + '<div class="f-blob f-blob-2"></div>'
      + '<div class="f-blob f-blob-3"></div>'
      + '<div class="f-blob f-blob-4"></div>'
      + '<div class="f-noise"></div>';
    document.body.insertBefore(bg, document.body.firstChild);

    // ── Scroll progress bar
    var bar = document.createElement('div');
    bar.id = 'fim-bar';
    document.body.appendChild(bar);
    window.addEventListener('scroll', function() {
      var t = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (t > 0 ? window.scrollY / t * 100 : 0) + '%';
    }, { passive: true });

    // ── Fix back links to return to /flashy
    document.querySelectorAll('.back-button, .back-link').forEach(function(el) {
      el.href = '/flashy';
    });

    // ── Wand cursor with glitter
    var canvas = document.createElement('canvas');
    canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:99998;';
    document.body.appendChild(canvas);
    var ctx = canvas.getContext('2d');

    function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
    resize();
    window.addEventListener('resize', resize);

    var wand = document.createElement('div');
    wand.style.cssText = 'position:fixed;top:0;left:0;pointer-events:none;z-index:99999;will-change:transform;';
    wand.innerHTML = [
      '<svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">',
      '<defs><filter id="wglow2"><feGaussianBlur stdDeviation="2.5" result="blur"/>',
      '<feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>',
      '<line x1="58" y1="8" x2="14" y2="68" stroke="#3b1a06" stroke-width="6" stroke-linecap="round"/>',
      '<line x1="58" y1="8" x2="14" y2="68" stroke="#7c3f12" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>',
      '<line x1="58" y1="8" x2="14" y2="68" stroke="#c47a3a" stroke-width="1.5" stroke-linecap="round" opacity="0.3"/>',
      '<ellipse cx="14" cy="68" rx="5" ry="4" fill="#2a0f02" opacity="0.9"/>',
      '<circle cx="58" cy="8" r="4" fill="#fff" opacity="0.95" filter="url(#wglow2)"/>',
      '<circle cx="58" cy="8" r="8" fill="#a78bfa" opacity="0.25"/>',
      '</svg>'
    ].join('');
    document.body.appendChild(wand);

    var mx = -300, my = -300, prevMx = -300, prevMy = -300, lastTime = 0;
    var colors = ['#FFD700','#FFC400','#a78bfa','#c4b5fd','#60a5fa','#f0abfc','#ffffff','#e2c2ff','#93c5fd'];
    var particles = [];

    document.addEventListener('mousemove', function(e) {
      mx = e.clientX; my = e.clientY;
      wand.style.transform = 'translate(' + (mx - 58) + 'px,' + (my - 8) + 'px)';
    });

    function spawnGlitter(x, y, count) {
      for (var i = 0; i < count; i++) {
        var angle = Math.random() * Math.PI * 2;
        var speed = Math.random() * 2.5 + 0.5;
        particles.push({
          x: x + (Math.random()-0.5)*6, y: y + (Math.random()-0.5)*6,
          vx: Math.cos(angle)*speed, vy: Math.sin(angle)*speed - Math.random()*2,
          size: Math.random()*2.5+0.8,
          color: colors[Math.floor(Math.random()*colors.length)],
          life: 1, decay: Math.random()*0.018+0.01,
          rot: Math.random()*Math.PI*2, rotV: (Math.random()-0.5)*0.25,
          isStar: Math.random() > 0.4
        });
      }
    }

    function drawStar4(x, y, r, color, alpha) {
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.fillStyle = color;
      ctx.shadowBlur = 5; ctx.shadowColor = color;
      ctx.beginPath();
      for (var i = 0; i < 8; i++) {
        var a = (i * Math.PI) / 4;
        var rad = i % 2 === 0 ? r : r * 0.35;
        i === 0 ? ctx.moveTo(Math.cos(a)*rad, Math.sin(a)*rad)
                : ctx.lineTo(Math.cos(a)*rad, Math.sin(a)*rad);
      }
      ctx.closePath(); ctx.fill(); ctx.restore();
    }

    function animate(ts) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      var dx = mx-prevMx, dy = my-prevMy, spd = Math.sqrt(dx*dx+dy*dy);
      if (ts - lastTime > 25) {
        if (mx > 0) spawnGlitter(mx, my, spd > 8 ? 5 : spd > 2 ? 3 : 1);
        prevMx = mx; prevMy = my; lastTime = ts;
      }
      if (mx > 0) {
        var grd = ctx.createRadialGradient(mx,my,0,mx,my,18);
        grd.addColorStop(0,'rgba(200,170,255,0.35)');
        grd.addColorStop(1,'rgba(167,139,250,0)');
        ctx.fillStyle = grd;
        ctx.beginPath(); ctx.arc(mx,my,18,0,Math.PI*2); ctx.fill();
      }
      for (var i = particles.length-1; i >= 0; i--) {
        var p = particles[i];
        p.x += p.vx; p.y += p.vy;
        p.vy += 0.07; p.vx *= 0.985;
        p.life -= p.decay; p.rot += p.rotV;
        if (p.life <= 0) { particles.splice(i,1); continue; }
        ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot);
        if (p.isStar) {
          drawStar4(0,0,p.size,p.color,p.life);
        } else {
          ctx.globalAlpha = p.life; ctx.fillStyle = p.color;
          ctx.shadowBlur = 4; ctx.shadowColor = p.color;
          ctx.beginPath(); ctx.arc(0,0,p.size*0.6,0,Math.PI*2); ctx.fill();
        }
        ctx.restore();
      }
      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  });
})();
