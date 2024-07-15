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



// Add event listener to handle window resize
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    // Remove the "show" class and reset the menuToggle image source on desktop view
    menu.classList.remove("show");
    menuToggle.src = "./images/icon-hamburger.svg";
  }
});