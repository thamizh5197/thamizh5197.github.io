---
layout: case-study
title: Redefined an internal tool used by 400+ employees across eight departments.
project: phantom-fx
order: 1        
hidden: true
---

Phantom FX reached out to me for freelance work in Jan 2021. After reviewing their existing application and its impact on the company's workflow, I was intrigued to be involved in a redesign. I pitched for a full-time role and was hired as a UI/UX Designer.

## Highlights

- Initiated user research across departments to uncover workflow mismatches and usability pain points
- Discovered critical UX flaws: rigid task logic, slow data loads (10+ mins), and **<10 SUS score**
- Reframed the problem from a UI fix to a full UX and system rethink
- Mapped real-world task flows and redesigned the IA to reflect actual studio operations
- Streamlined data handling to significantly reduce load times and improve responsiveness
- Drove cross-functional alignment between artists, coordinators, and tech to build a usable, scalable tool
- Turned a failing internal product into a reliable daily driver for **200+ VFX artists and 15+ managers**

## The Problem

### Project Management Application Brief

Being a visual effects studio, the company gets movie shots from clients and works on them to add 2D, 3D and other visual effects. On an average project there would be 3 to 4 sequences, where each sequence could have around 200 shots. Furthermore, each shot has 4-5 tasks to be done upon them like 2D, 3D, rigging, modelling etc. So an average project would contain around **10,000 individual tasks** to be worked on. The company has around **200 VFX artists and ~15 managers** to oversee the completion, budget and quality of these tasks.

### Major Use Cases of the Application

1. Project progress tracking
2. Project budget tracking
3. Project quality control
4. Artists management

### The Challenge

The existing application was developed in an agile methodology **without any designer** in the team. The tool was inconsistent with UI, information architecture was a mess and it took **more than 10 mins to load** specific pages due to numerous data being fetched from the server. A shot has 24 unique specifications as do tasks, so imagine fetching information of 1000 tasks with their corresponding 24 data points—that's **24,000 specifications** loaded for a single person accessing an average project.

A SUS survey was conducted with 20+ people and the score turned out to be **below 10**.

While it looked like just a UI redesign was required to solve the problems, after conducting user interviews with the stakeholders from each department, it was clear that there was a **lack of understanding of the tool** as it was different from their workflow. For example, the tool assumes one task created on a shot is going to be assigned and completed by one artist, but in reality artists often get higher priority tasks where they have to put their current task on hold. After this, the coordinator creates a new task in the application in order to assign it to a different artist.

### Pain Points from User Interviews

- **Users couldn't find basic information** like artist's current work in progress task, task status, task ETA, review notes etc.
  - The information did exist but the user wasn't able to find it
  
- **Users weren't aware of the existence of certain features** like exporting, editing information, filtering table data etc.
  - The user didn't know that an element could be interacted with, due to bad UI elements without feedbacks
  
- **Users are not familiar with jargons** used in the application
  - Each department added their own jargon which ended up hurting users from other departments who are not aware of them
  
- **Users want to visualize the progress** of the project instead of just numbers
  - Existing application displayed everything with tables and numbers
  
- **The application was not flexible enough** for the team to juggle between high and low priority projects

## The Process

### User Task Analysis

For a major redesign I had to start from understanding the workflow of the departments, how a project is stored and how different user roles such as Artists, Supervisors, Line producers etc interact with the application for different purposes.

#### Roles and Tasks

**1. Line Producers**
- Create projects with budgets and tasks
- Track project based on sequence budget and forecasts
- Check for availability of the artist in upcoming days or weeks for onboarding new projects
- Assign coordinators, supervisors and sequence supervisors to the projects

**2. Coordinators**
- Schedule tasks to artists
- Follow up on schedule and artist attendance
- Reschedule tasks in unusual scenarios
- Track the progress of tasks

**3. Supervisors**
- Review tasks that are done by artists
- Define budget for tasks for new projects
- Approve and push shots to rendering farm

**4. Team Leads**
- Review tasks done by artists
- Work on assigned tasks
- Check the artist's work in progress tasks

**5. Artists**
- Work on assigned tasks
- Update progress of the tasks
- Publish dailies
- Publish completed tasks for review

**6. Finance Accountant**
- Track project budget
- Generate project financial metrics

### Fixing the Information Architecture

The project structure and data points (specifications) are crucial for enabling the user to easily find information that they are looking for. But the existing application handled it badly which resulted in users having a hard time accessing information.

**Following steps were taken to fix the information architecture:**

1. Newly requested data points were added and unnecessary ones were removed
2. Subtasks were added to project structure to let the coordinators divide or create several subtasks under the main task, which also makes it easy to track budget unlike before
3. Role-based personalized dashboard was added instead of having a separate page for each role in the application
4. New layout was designed for viewing project information. Where instead of tables, users can view the shot or task info through a modal. Because of the modals the application no longer has to bring 24,000 data points at once, instead loads information of the particular task/shot that is demanded by the user. At the same time, users can still choose to customize the table columns

### Adding Project Metrics

1. Defined the project metrics on budget, progress and productivity which are visualized through charts and graphs. The users can export the metrics as Excel if needed
2. Separate page for scheduling tasks with a Gantt chart to show artist schedules was added. Which also shows resources (artist) available in upcoming weeks to help Line producers onboard new projects

### Other Improvements

- As the entire team works with ceiling lights off, **dark mode was the primary choice**. A design system was created to ensure UI consistency
- Furthermore, complicated jargons and acronyms were renamed to be easily understood. Icons were reworked to be consistent across the pages
- Warning, error, success and help texts were added to increase usability
- An exclusive page for the finance team to see forecasts on resource spending and to get insights from completed projects was added

## The Impact

After user testing sessions and presentations with the production team, the application was developed and deployed.

A System Usability Scale survey was conducted after a few weeks and the score was **90**.

It was an amazing opportunity to create a good impact on day-to-day life of about 200 people.

## Before and after interfaces
<div class="img-grid">
  <div class="gallery-item">
    <img src="/screens/pfx_before.jpg" alt="Project info old interface">
  </div>
  <div class="gallery-item">
    <img src="/screens/pfx_after.jpg" alt="Project info redesigned interface">
  </div>
</div>

## More snaps

<div class="img-grid">
 <div class="gallery-item">
    <img src="/screens/pfx artist db.jpg" alt="Artist dashboard">
  </div>
  <div class="gallery-item">
    <img src="/screens/pfx gantt chart.jpg" alt="Project planning gantt chart">
  </div>
  <div class="gallery-item">
    <img src="/screens/pfx_filler1.png" alt="Design system">
  </div>
  <div class="gallery-item">
    <img src="/screens/pfx_filler2.png" alt="Icons">
  </div>
  <div class="gallery-item">
    <img src="/screens/pfx_filler3.png" alt="Colors">
  </div>
  <div class="gallery-item">
    <img src="/screens/pfx_filler4.png" alt="Artist dashboard wireframe - Ideation">
  </div>
  <div class="gallery-item">
    <img src="/screens/pfx_filler5.png" alt="Project info wireframe - Ideation">
  </div>
  <div class="gallery-item">
    <img src="/screens/pfx_filler6.png" alt="Project Quality check pipeline wireframe">
  </div>
 
</div>


