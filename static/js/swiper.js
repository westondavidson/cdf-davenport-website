document.addEventListener('DOMContentLoaded', function () {
  // Check if the carousel container exists
  const carouselContainer = document.querySelector('.swiper-container');
  if (!carouselContainer) return;

  var swiper = new Swiper('.swiper-container', {
    // Enable loop mode
    loop: true,
    
    // Autoplay configuration
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    
    // Pagination configuration
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // Enable smooth transitions
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    
    // Touch and mouse control
    grabCursor: true,
    touchRatio: 1,
    touchAngle: 45,
    
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 1,
        spaceBetween: 40
      }
    },
    
    // Performance optimizations
    speed: 800,
    watchSlidesProgress: true,
    observer: true,
    observeParents: true,
    
    // Keyboard control
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    
    // Accessibility
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
      paginationBulletMessage: 'Go to slide {{index}}',
    }
  });
  
  // Add custom navigation icons
  document.querySelectorAll('.swiper-button-next').forEach(function(button) {
    button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"></polyline></svg>';
    button.setAttribute('aria-label', 'Next slide');
  });
  
  document.querySelectorAll('.swiper-button-prev').forEach(function(button) {
    button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"></polyline></svg>';
    button.setAttribute('aria-label', 'Previous slide');
  });
  
  // Add keyboard navigation for slides with links
  document.querySelectorAll('.swiper-slide a').forEach(function(link) {
    link.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        window.location.href = this.href;
      }
    });
  });
  
  // Pause autoplay when user is interacting with the page
  document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
      swiper.autoplay.stop();
    } else {
      swiper.autoplay.start();
    }
  });
});
