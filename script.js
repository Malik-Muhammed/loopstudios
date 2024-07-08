const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
console.log(menu)

menuToggle.addEventListener("click", () => {
     // Toggle the "show" class on the menu element
    menu.classList.toggle("show");

   // Update the menuToggle image source based on menu visibility using ternary operator
    menuToggle.src = menu.classList.contains("show")
    ? "./images/icon-close.svg"
    : "./images/icon-hamburger.svg";
        

});









