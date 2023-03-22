const navToggle = document.querySelector(".header__toggle")
const navMenu = document.querySelector(".menu")


navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("menu__invisible");

    if(navMenu.classList.contains("menu_visible")){
        navToggle.setAttribute("aria-label", "Cerrar menú");
    }
    else{
        navToggle.setAttribute("aria-label", "Abrir menú");
    }
});

