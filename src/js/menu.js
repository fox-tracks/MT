'use strict';

(function () {
    var menuBtn = document.querySelector('.hamburger-toggle');
    var page = document.querySelector('.page');

    menuBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        menuBtn.classList.toggle('hamburger-toggle--close');
        page.classList.toggle('page--transform');
    });

    page.addEventListener('click', function (e) {
        if (!e.target.classList.contains('main-nav__link')) {
            if (menuBtn.classList.contains('hamburger-toggle--close')) {
                menuBtn.classList.remove('hamburger-toggle--close');
                page.classList.remove('page--transform');
            }
        }
    });
})();


