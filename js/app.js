
//burger menu
document.addEventListener('DOMContentLoaded', function() {
  let navMenu = document.querySelector('.nav-menu');
  let navbarToggler = document.querySelector('.navbar-toggler');

  navMenu.style.display = 'none';

  navbarToggler.addEventListener('click', function() {
      if (navMenu.style.display === 'none') {
          navMenu.style.display = 'block';
      } else {
          navMenu.style.display = 'none';
      }
  });
});

//scroll up button
document.addEventListener("DOMContentLoaded", function() {
    let scrollUp = document.getElementById("scroll-up");
    
    scrollUp.addEventListener("click", function() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      }
     
      
      
      );
    });
  });

  window.addEventListener("scroll", function() {
    let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
    let scrollUp = document.getElementById("scroll-up");
  
    if (scrollPosition > 100) {
      scrollUp.style.opacity = "1";
    } else {
     scrollUp.style.opacity = "0";
    }
  });

  document.addEventListener("DOMContentLoaded", function() {
    const text = "<Full Stack Web Developer>";
    const speed = 100;
    const div = document.getElementById("text");
    let index = 0;
    let interval;

    function mostrarTextoLetraPorLetra() {
        if (index < text.length) {
            div.textContent += text[index];
            index++;
        } else {
            clearInterval(interval); // Detener la ejecución continua
            setTimeout(function() {
                div.textContent = ""; // Limpiar el contenido del div
                index = 0; // Reiniciar el índice
                interval = setInterval(mostrarTextoLetraPorLetra, speed);
            }, 5000); // Esperar 5 segundos antes de reiniciar
        }
    }

    // Iniciar el intervalo inicial
    interval = setInterval(mostrarTextoLetraPorLetra, speed);
});


