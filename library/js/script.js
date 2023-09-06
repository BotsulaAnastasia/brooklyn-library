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
*/

let carretLeft = document.getElementById("carret-left"),
    carretRight = document.getElementById("carret-right"),
    sliderImg = document.getElementById("slider-images"),
    imgAbout = document.querySelectorAll('.img-about'),
    carousel = document.querySelectorAll('.slider-dot'),
    left = 0,
    imgWidth = 475,
    imgCount = 0;

sliderImg.style.left = left + 'px';

slideTo = (direction) => {
    if (direction === 'right') {
        left -= imgWidth;
        imgCount++;
    } 
    if (direction === 'left') {
        left += imgWidth;
        imgCount--;
    } 
    if (left >= 0) {
        left = 0;
        imgCount = 0;
    } 
    if (left < -1900) {
        left = -1900;
        imgCount = imgAbout.length - 1;
    } 
    sliderImg.style.left = left + 'px';
    thisActiveImg(imgCount);
}

carretLeft.addEventListener("click", () => {
    slideTo('left');
});

carretRight.addEventListener("click", () => {
    slideTo('right');
});

let thisActiveImg = (index) => {
    carousel.forEach(item => item.classList.remove('active--dot'));
    carousel[index].classList.add('active--dot');
}

carousel.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        if (index >= 0 && index < carousel.length) {
            left = -imgWidth * index;
            sliderImg.style.left = left + 'px';
            imgCount = index;
            thisActiveImg(imgCount);
        }
    });
});