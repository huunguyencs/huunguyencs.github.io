/* ============================================================
   NGUYEN VAN HUU — Portfolio Scripts
   Marquee-editorial rebuild · one orchestrated entrance
   ============================================================ */

(function () {
    'use strict';

    var reveals = document.querySelectorAll('.reveal');
    var reduce =
        window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function showAll() {
        reveals.forEach(function (el) {
            el.classList.add('is-visible');
        });
    }

    // Reduced motion or no IntersectionObserver: reveal everything at once.
    if (reduce || !('IntersectionObserver' in window)) {
        showAll();
        return;
    }

    var observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    reveals.forEach(function (el) {
        observer.observe(el);
    });
})();
