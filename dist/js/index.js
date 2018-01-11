'use strict';

(function () {
    var menuBtn = document.querySelector('.hamburger-toggle');
    var page = document.querySelector('.page');
    var menu = document.querySelector('.main-nav');

    menuBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        menuBtn.classList.toggle('hamburger-toggle--close');
        page.classList.toggle('page--transform');
    });

    page.addEventListener('click', function (e) {
        if (e.target !== menu) {
            if (menuBtn.classList.contains('hamburger-toggle--close')) {
                menuBtn.classList.remove('hamburger-toggle--close');
                page.classList.remove('page--transform');
            }
        }
    });
})();



'use strict';

(function(){
  var popup = document.querySelector('.popup');
  var playBtn = document.querySelector('.play-btn');
  var closeBtn = popup.querySelector('.popup__close');
  var checkbox = popup.querySelector('.agreement__checkbox');
  var proceedBtn = popup.querySelector('.agreement__btn');

  checkbox.addEventListener('click', function () {
    if (checkbox.checked === true) {
      proceedBtn.removeAttribute('disabled');
      proceedBtn.addEventListener('click', function () {
        window.open('https://yandex.ru');
      });
    } else {
      proceedBtn.setAttribute('disabled', 'disabled');
    }
  });

  playBtn.addEventListener('click', function (e) {
    e.preventDefault();
    popup.classList.add('popup--shown');
  });

  closeBtn.addEventListener('click', function (e) {
    popup.classList.remove('popup--shown');
    checkbox.checked = false;
    proceedBtn.setAttribute('disabled', 'disabled');
  });

  document.addEventListener('keydown', function (e) {
    if (e.target !== popup) {
      popup.classList.remove('popup--shown');
      checkbox.removeAttribute('checked');
    }
  });
})();
