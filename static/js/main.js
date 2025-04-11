// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
      const expanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true' || false;
      mobileMenuToggle.setAttribute('aria-expanded', !expanded);
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
      const nav = document.getElementById('main-navigation');
      const isNavOpen = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
      
      if (isNavOpen && 
          !nav.contains(event.target) && 
          !mobileMenuToggle.contains(event.target)) {
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
      }
    });
    
    // Close menu when pressing escape key
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && 
          mobileMenuToggle.getAttribute('aria-expanded') === 'true') {
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
      }
    });
    
    // Close menu after clicking a nav link on mobile
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          mobileMenuToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }
  
  // Fixed header on scroll - make background solid
  const header = document.querySelector('header');
  if (header) {
    // Initialize header with solid background
    header.style.setProperty('background-color', '#ffffff', 'important');
    
    // Add scroll event listener to maintain solid background
    window.addEventListener('scroll', () => {
      // Always keep the background solid white
      header.style.setProperty('background-color', '#ffffff', 'important');
      
      // Add shadow on scroll
      if (window.scrollY > 10) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
      } else {
        header.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
      }
    });
  }
}); 