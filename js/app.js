
//burger menu
document.addEventListener('DOMContentLoaded', function() {
  let navMenu = document.querySelector('.nav-menu');
  let navbarToggler = document.querySelector('.container-button');

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


//scroll top
window.addEventListener("scroll", function() {
  let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  let scrollUp = document.getElementById("scroll-up");

  if (scrollPosition > 100) {
    scrollUp.style.opacity = "1";
  } else  {
   scrollUp.style.opacity = "0";
  }
});






  //navigation btn menu main 
  document.getElementById("main").addEventListener("click", function(e) {
    e.preventDefault();

    let destino = document.getElementById("about-me");
    let destinoPosicion = destino.offsetTop;
    let posicionAjustada = destinoPosicion - 95;

    window.scrollTo({
        top: posicionAjustada,
        behavior: "smooth"
    });
    
});

document.getElementById("services").addEventListener("click", function(e) {
  e.preventDefault();

  let destino = document.getElementById("portfolio");
  let destinoPosicion = destino.offsetTop;
  let posicionAjustada = destinoPosicion - 95;

  window.scrollTo({
      top: posicionAjustada,
      behavior: "smooth"
  });
});

document.getElementById("contact").addEventListener("click", function(e) {
  e.preventDefault();

  let destino = document.getElementByClass("container");
  let destinoPosicion = destino.offsetTop;
  let posicionAjustada = destinoPosicion - 95;

  window.scrollTo({
      top: posicionAjustada,
      behavior: "smooth"
  });
});




//navigation burger menu responsive
document.getElementById("home").addEventListener("click", (e) => { 
  e.preventDefault();
 let about  = document.querySelector(".hero");
 let destinyPosition = about.offsetTop;
 let destinyFixed = destinyPosition - 95 ;

 let navMenu = document.querySelector('.nav-menu');// this is only to dissapear the burger menu after the event click
 navMenu.style.display = 'none';

 window.scrollTo({
      top: destinyFixed,
      behavior: "smooth"

} );

});


document.getElementById("about-burger").addEventListener("click", (e) => { 
  e.preventDefault();
 let about  = document.getElementById("about-me");
 let destinyPosition = about.offsetTop;
 let destinyFixed = destinyPosition - 95 ;

 let navMenu = document.querySelector('.nav-menu');// this is only to dissapear the burger menu after the event click
 navMenu.style.display = 'none';

 window.scrollTo({
      top: destinyFixed,
      behavior: "smooth"

} );

});

document.getElementById("skills").addEventListener("click", (e) => { 
  e.preventDefault();
 let about  = document.getElementById("portfolio");
 let destinyPosition = about.offsetTop;
 let destinyFixed = destinyPosition -95 ;

 let navMenu = document.querySelector('.nav-menu');// this is only to dissapear the burger menu after the event click
  navMenu.style.display = 'none';

 window.scrollTo({
      top: destinyFixed,
      behavior: "smooth"

} );
});

document.getElementById("contact-me").addEventListener("click", (e) => { 
  e.preventDefault();
 let about  = document.getElementById("");
 let destinyPosition = about.offsetTop;
 let destinyFixed = destinyPosition -95 ;

 let navMenu = document.querySelector('.nav-menu'); // this is only to dissapear the burger menu after the event click
 navMenu.style.display = 'none';

 window.scrollTo({
      top: destinyFixed,
      behavior: "smooth"

} );
});







  //hero function
  document.addEventListener("DOMContentLoaded", function() {
    const text = "<Full Stack Web Developer/>";
    const speed = 100;
    const div = document.getElementById("text");
    let index = 0;
    let interval;

    function mostrarTextoLetraPorLetra() {
        if (index < text.length) {
            div.textContent += text[index];
            index++;
        } else {
            clearInterval(interval); // stop the timer
            setTimeout(function() {
                div.textContent = ""; // clean the content in the div
                index = 0; // restart index
                interval = setInterval(mostrarTextoLetraPorLetra, speed);
            }, 5000); // wait 5 seconds before start
        }
    }

  
    interval = setInterval(mostrarTextoLetraPorLetra, speed);
});




//change button responsive menu
document.getElementById('containerButton').addEventListener('click', function(event) {
  // Verifica si el clic fue en el contenedor de botones y no en un enlace
  if (!event.target.closest('.menu-links')) {
    this.classList.toggle("change");
  }
});

// Agrega un event listener a cada enlace en el menú de navegación
document.querySelectorAll('.menu-links').forEach(function(link) {
  link.addEventListener('click', function() {
    // Remueve la clase 'change' del contenedor de botones cuando se hace clic en un enlace
    document.getElementById('containerButton').classList.remove('change');
  });
});