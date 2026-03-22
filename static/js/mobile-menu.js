document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.getElementById('main-navigation');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileBreakpoint = window.matchMedia('(max-width: 768px)');

    if (!menuToggle || !navMenu) {
        return;
    }

    function setMenuState(isOpen) {
        menuToggle.classList.toggle('active', isOpen);
        navMenu.classList.toggle('active', isOpen);
        menuToggle.setAttribute('aria-expanded', String(isOpen));
    }

    function closeMenu() {
        setMenuState(false);
    }

    function syncMenuForViewport() {
        if (!mobileBreakpoint.matches) {
            closeMenu();
        }
    }

    setMenuState(false);

    menuToggle.addEventListener('click', function(event) {
        if (!mobileBreakpoint.matches) {
            return;
        }

        event.preventDefault();
        event.stopPropagation();
        const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
        setMenuState(!isOpen);
    });

    document.addEventListener('click', function(event) {
        if (!mobileBreakpoint.matches) {
            return;
        }

        const clickInsideMenu = navMenu.contains(event.target);
        const clickOnToggle = menuToggle.contains(event.target);

        if (!clickInsideMenu && !clickOnToggle) {
            closeMenu();
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeMenu();
        }
    });

    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (mobileBreakpoint.matches) {
                closeMenu();
            }
        });
    });

    window.addEventListener('resize', syncMenuForViewport);
    syncMenuForViewport();
});
