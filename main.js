// ***inizio***

const openMenu = document.querySelector(".header-rigth > a");
const closeMenu = document.querySelector(".close");

// ***creo le funzioni

openMenu.addEventListener("click", function(){
    document.querySelector(".hamburger-menu").classList.add("active")
});


closeMenu.addEventListener("click", function(){
    document.querySelector(".hamburger-menu").classList.remove("active")
});


// ***prova 1 sbagliata

// showMenu.addEventListener("click");

// function showMenu(click) {
//     document.querySelector(".hamburger-menu").classList.add("active");
// }

// closeMenu.addEventListener("click");

// function closeMenu(click) {
//     document.querySelector(".hamburger-menu").classList.remove("active");
// }



