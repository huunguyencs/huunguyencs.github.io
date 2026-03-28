/* ============================================
   NGUYEN VAN HUU — Portfolio Scripts
   ============================================ */

(function () {
    'use strict';

    // --- Nav scroll state ---
    const nav = document.getElementById('nav');
    let lastScroll = 0;

    function onScroll() {
        const y = window.scrollY;
        nav.classList.toggle('is-scrolled', y > 40);
        lastScroll = y;
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // --- Mobile menu ---
    const toggle = document.querySelector('.nav__toggle');
    const menu = document.querySelector('.nav__menu');
    let overlay = document.querySelector('.nav__overlay');

    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'nav__overlay';
        document.body.appendChild(overlay);
    }

    var mainContent = document.querySelector('main');
    var focusableMenuItems = menu.querySelectorAll('a, button');

    function openMenu() {
        toggle.classList.add('is-active');
        menu.classList.add('is-open');
        overlay.classList.add('is-visible');
        document.body.style.overflow = 'hidden';
        if (mainContent) mainContent.setAttribute('aria-hidden', 'true');
        if (focusableMenuItems.length) focusableMenuItems[0].focus();
    }

    function closeMenu() {
        toggle.classList.remove('is-active');
        menu.classList.remove('is-open');
        overlay.classList.remove('is-visible');
        document.body.style.overflow = '';
        if (mainContent) mainContent.removeAttribute('aria-hidden');
        toggle.focus();
    }

    toggle.addEventListener('click', function () {
        menu.classList.contains('is-open') ? closeMenu() : openMenu();
    });

    overlay.addEventListener('click', closeMenu);

    // Escape key closes menu
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && menu.classList.contains('is-open')) {
            closeMenu();
        }
    });

    // Focus trapping within open menu
    menu.addEventListener('keydown', function (e) {
        if (e.key !== 'Tab' || !menu.classList.contains('is-open')) return;
        var items = menu.querySelectorAll('a, button');
        var first = items[0];
        var last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
        }
    });

    // Close menu on nav link click
    menu.querySelectorAll('.nav__link').forEach(function (link) {
        link.addEventListener('click', closeMenu);
    });

    // --- Active nav link on scroll ---
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav__link[href^="#"]');

    function highlightNav() {
        const scrollY = window.scrollY + 120;

        sections.forEach(function (section) {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollY >= top && scrollY < top + height) {
                navLinks.forEach(function (link) {
                    link.classList.remove('nav__link--active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('nav__link--active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNav, { passive: true });

    // --- Reveal on scroll (Intersection Observer) ---
    const reveals = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
        );

        reveals.forEach(function (el) {
            observer.observe(el);
        });
    } else {
        // Fallback: show everything
        reveals.forEach(function (el) {
            el.classList.add('is-visible');
        });
    }
})();
