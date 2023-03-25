//Hamburguer Menu
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

// Efectos Scroll
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2000,
    delay: 400
});
ScrollReveal().reveal('.scroll__top', {origin: 'bottom'});
ScrollReveal().reveal('.scroll__contenido', {origin: 'bottom'});
ScrollReveal().reveal('.scroll__titulo', {origin: 'top'});
ScrollReveal().reveal('.habilidad__contenido', {origin: 'bottom', interval: 200});
