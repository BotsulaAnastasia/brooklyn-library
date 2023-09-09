/* Бургер меню */
var burgerMenu = document.querySelector('.tablet-menu');
var menuBody = document.querySelector('.header-navigation');
if (burgerMenu) {
    burgerMenu.addEventListener("click", (e) => {
        burgerMenu.classList.toggle('--active');
        menuBody.classList.toggle('--active');
    })
}

/* Закрытие бургер меню при клике вне области */
window.addEventListener("click", (e) => {
    const target = e.target;
    if (!target.closest('.tablet-menu') && !target.closest('.header-navigation')) {
        burgerMenu.classList.remove('--active');
        menuBody.classList.remove('--active');
    }
});

/* drop menu-profile */
var menuProfile = document.querySelector('.menu-profile');
var iconProfile = document.querySelector('.icon-profile');
if (menuProfile) {
    iconProfile.addEventListener("click", (e) => {
        menuProfile.classList.toggle('--active');
    })
}

window.addEventListener("click", (e) => {
    const target = e.target;
    if (!target.closest('.menu-profile') && !target.closest('.icon-profile')) {
        menuProfile.classList.remove('--active');
    }
});

/* Карусель в секции About */
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

/* Слайдер FadeIn, FadeOut в секции Favorites */
const fadeIn = (el, timeout, display) => {
    el.style.opacity = 0;
    el.style.display = display || 'block';
    el.style.transition = `opacity ${timeout}ms`;
    setTimeout(() => {
        el.style.opacity = 1;
    }, 10);
};

const fadeOut = (el, timeout) => {
    el.style.opacity = 1;
    el.style.transition = `opacity ${timeout}ms`;
    el.style.opacity = 0;

    setTimeout(() => {
        el.style.display = 'none';
    }, timeout);
};

const bookBlock = document.querySelectorAll('.books-block');
const radioBtn = document.querySelectorAll('input[name=favorite-season]');

radioBtn.forEach((radio, index) => {
    radio.addEventListener("click", () => {
        let tabId = radio.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);

        bookBlock.forEach((item) => {
            item.style.display = 'none';
        });

        fadeIn(currentTab, 1000, 'flex');
    });
});

/* Модальное окно Log In */
const logIn = document.getElementById("login");
const logInChapter = document.getElementById("login-chapter");
const overlay = document.querySelectorAll('.overlay');
const btnLogin = document.getElementById("btn-login");
if (logInChapter || btnLogin) {
    logInChapter.addEventListener("click", (e) => {
        logIn.classList.toggle('--active');
    });
    btnLogin.addEventListener("click", (e) => {
        logIn.classList.toggle('--active');
    });
    modalClose(logIn);
}

/* Закрытие модальных окон */
function modalClose (modalName) {
    window.addEventListener("click", (e) => {
        let classes = e.target.classList;
        if (classes.contains('overlay') || classes.contains('modal-cross')) {
            modalName.classList.remove('--active');
        }
    });

}

/* Модальное окно Register */
const register = document.getElementById("register");
const registerChapter = document.getElementById("register-chapter");
const btnSignup = document.getElementById("btn-signup");
if (registerChapter || btnSignup) {
    registerChapter.addEventListener("click", (e) => {
        register.classList.toggle('--active');
    });
    btnSignup.addEventListener("click", (e) => {
        register.classList.toggle('--active');
    });
    modalClose(register);
}