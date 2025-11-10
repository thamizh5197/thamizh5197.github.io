// Lightbox functionality
(function() {
  let currentImageIndex = 0;
  let images = [];

  // Initialize lightbox when DOM is ready
  function initLightbox() {
    // Get all images that should have lightbox
const galleryItems = document.querySelectorAll('.gallery-item img, .collage img, .img-grid img, .project-description img');    
    images = Array.from(galleryItems).map((img, index) => {
      const caption = img.getAttribute('alt') || 
                     img.getAttribute('data-caption') || 
                     img.closest('.gallery-item')?.querySelector('.image-caption')?.textContent || 
                     '';
      
      // Add click handler
      img.style.cursor = 'pointer';
      img.addEventListener('click', (e) => {
        e.preventDefault();
        openLightbox(index);
      });

      return {
        src: img.src,
        caption: caption
      };
    });
  }

  // Open lightbox
  function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const counter = document.getElementById('lightbox-counter');

    if (images[currentImageIndex]) {
      lightboxImg.src = images[currentImageIndex].src;
      lightboxCaption.textContent = images[currentImageIndex].caption;
      counter.textContent = `${currentImageIndex + 1} / ${images.length}`;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
  }

  // Close lightbox
  function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
  }

  // Navigate to next image
  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    openLightbox(currentImageIndex);
  }

  // Navigate to previous image
  function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    openLightbox(currentImageIndex);
  }

  // Setup event listeners
  function setupEventListeners() {
    // Close button
    document.getElementById('lightbox-close')?.addEventListener('click', closeLightbox);

    // Click outside image to close
    document.getElementById('lightbox')?.addEventListener('click', (e) => {
      if (e.target.id === 'lightbox' || e.target.id === 'lightbox-content') {
        closeLightbox();
      }
    });

    // Navigation buttons
    document.getElementById('lightbox-prev')?.addEventListener('click', (e) => {
      e.stopPropagation();
      prevImage();
    });

    document.getElementById('lightbox-next')?.addEventListener('click', (e) => {
      e.stopPropagation();
      nextImage();
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      const lightbox = document.getElementById('lightbox');
      if (!lightbox.classList.contains('active')) return;

      switch(e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
      }
    });
  }

  // Initialize when DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initLightbox();
      setupEventListeners();
    });
  } else {
    initLightbox();
    setupEventListeners();
  }
})();