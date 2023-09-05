var burgerMenu = document.querySelector('.tablet-menu');
var menuBody = document.querySelector('.header-navigation');
if (burgerMenu) {
    burgerMenu.addEventListener("click", function (e) {
        burgerMenu.classList.toggle('--active');
        menuBody.classList.toggle('--active');
    })
}
/*
if (menuBody.classList.contains('--active')) {
    const menuBody = document.querySelector('.header-navigation');
     
    document.onclick = function (e) {
        if (e.target.className != "header-navigation") {
            menuBody.style.display = "none";
        };
    };

}

const carretLeft = document.querySelector('#carret-left');
const carretRight = document.querySelector('#carret-right');

const sliderImg = document.querySelector('#slider-images');

carretRight.addEventListener("click", () => {
    sliderImg.classList.add('transition-right');
})
*/

let carretLeft = document.getElementById("carret-left"),
    carretRight = document.getElementById("carret-right"),
    sliderImg = document.getElementById("slider-images"),
    left = 0,
    imgWidth = 475;

sliderImg.style.left = left + 'px';

slideTo = (direction) => {
    if (direction === 'right') left -= imgWidth;
    if (direction === 'left') left += imgWidth;
    if (left >= 0) left = 0;
    if (left < -1900) left = -1900;  
    sliderImg.style.left = left + 'px';
}

carretLeft.addEventListener("click", () => {
    slideTo('left');
});

carretRight.addEventListener("click", () => {
    slideTo('right');
});