function toggleBurgerMenu() {
    const burgerMenu = document.querySelector(".header__burger-menu");
    const closeMenu = document.querySelector(".header__close-nav");
    const navbar = document.querySelector(".header__nav");

    burgerMenu.addEventListener("click", () => {
        navbar.classList.add("header__nav-active")
    })

    closeMenu.addEventListener("click", () => {
        navbar.classList.remove("header__nav-active")
    })
}

toggleBurgerMenu();

function activateHeader() {
    const header = document.querySelector("header");
    window.onscroll = () => {
        if (window.scrollY > 100) {
            header.classList.add("header_active");
        }
        else {
            header.classList.remove("header_active");
        }
    }
}

activateHeader();