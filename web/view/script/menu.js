class Header {
   static open(){
    const menuToggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");

    menuToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });
   }


   static get getBar(){
    return  document.getElementById('navbar');
   }


    static eventBar() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
               return this.getBar.classList.add('shadow-2xl', 'bg-opacity-90', 'backdrop-blur-md');

            }
            this.getBar.classList.remove('shadow-2xl', 'bg-opacity-90', 'backdrop-blur-md');
        });

    }
}

addEventListener(`DOMContentLoaded`, () => {
    Header.open();
    Header.eventBar()
})









