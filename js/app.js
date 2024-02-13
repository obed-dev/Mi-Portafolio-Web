 //burger menu 
 document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencia al botón y al nav
    let burgerMenu = document.querySelector("nav-menu");
  
  
    // Función para alternar la visibilidad del nav
    function toggleNav() {
      if (burgerMenu.style.display === "none") {
        burgerMenu.style.display = "block";
      } else {
        burgerMenu.style.display = "none";
      }
    }
  
    // Agregar un event listener al botón para llamar a la función toggleNav
    burgerMenu.addEventListener("click", toggleNav);
  });
 