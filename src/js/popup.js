
var popup = document.querySelector('.popup');
var playBtn = document.querySelector('.play-btn');
var closeBtn = popup.querySelector('.popup__close');
var checkbox = popup.querySelector('.agreement__checkbox');
var  proceedBtn = popup.querySelector('.agreement__btn');

checkbox.addEventListener('click', function() {
  if (checkbox.checked === true) {
    proceedBtn.removeAttribute('disabled');
    proceedBtn.addEventListener('click', function() {
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
  checkbox.removeAttribute('checked');
});

document.addEventListener("keydown", function (e) {
  if (e.target !== popup) {
    popup.classList.remove("popup--shown");
    checkbox.removeAttribute('checked');
  }
});