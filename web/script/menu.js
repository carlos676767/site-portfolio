class Header {
   static open(){
    const menuToggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");

    menuToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });
   }
}

addEventListener(`DOMContentLoaded`, () => {
    Header.open();
})