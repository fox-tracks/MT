var menuBtn = document.querySelector('.hamburger-toggle');
var page = document.querySelector('.page');

menuBtn.addEventListener('click', function(evt){
    evt.preventDefault();
    menuBtn.classList.toggle('hamburger-toggle--close');
    page.classList.toggle('page--transform');
})

