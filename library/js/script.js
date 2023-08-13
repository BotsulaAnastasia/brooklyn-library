var burgerMenu = document.querySelector('.tablet-menu');
var menuBody = document.querySelector('.header-navigation');
if (burgerMenu){
    burgerMenu.addEventListener("click", function (e) {
        burgerMenu.classList.toggle('--active');
        menuBody.classList.toggle('--active');
    })
}

if (menuBody.classList.contains('--active')) {
    const menuBody = document.querySelector('.header-navigation');
     
    document.onclick = function (e) {
        if (e.target.className != "header-navigation") {
            menuBody.style.display = "none";
        };
    };

}
