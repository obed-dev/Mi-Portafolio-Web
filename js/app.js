
//burger menu
document.addEventListener('DOMContentLoaded', function() {
  
  let navMenu = document.querySelector('.nav-menu');
  let navbarToggler = document.querySelector('.container-button');

  navMenu.style.display = "none";
  navbarToggler.addEventListener('click', function() {
    if (navMenu.style.display === 'none') {
      navMenu.classList.remove('fade-out');
      navMenu.style.display = 'block';
      setTimeout(() => {
        navMenu.classList.add('fade-in');
      }, 10); // Pequeño retraso para permitir que se aplique el cambio de display
    } else {
      navMenu.classList.remove('fade-in');
      navMenu.classList.add('fade-out');
      setTimeout(() => {
        navMenu.style.display = "none";
      }, 500); // Ajusta el tiempo según la duración de la transición
    }
  });
});

//scroll up 
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


//show scroll button
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
  let posicionAjustada = destinoPosicion - 80;

  window.scrollTo({
      top: posicionAjustada,
      behavior: "smooth"
  });
});

document.getElementById("contact").addEventListener("click", function(e) {
  e.preventDefault();

  let destino = document.getElementById("footer");
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

 heading.classList.add('fade-in');

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

 heading.classList.add('fade-in');

 window.scrollTo({
      top: destinyFixed,
      behavior: "smooth"

} );

});

document.getElementById("skills").addEventListener("click", (e) => { 
  e.preventDefault();
 let about  = document.getElementById("portfolio");
 let destinyPosition = about.offsetTop;
 let destinyFixed = destinyPosition - 90 ;

 let navMenu = document.querySelector('.nav-menu');// this is only to dissapear the burger menu after the event click
  navMenu.style.display = 'none';

  heading.classList.add('fade-in');

 window.scrollTo({
      top: destinyFixed,
      behavior: "smooth"

} );
});

document.getElementById("contact-me").addEventListener("click", (e) => { 
  e.preventDefault();
 let about  = document.getElementById("footer");
 let destinyPosition = about.offsetTop;
 let destinyFixed = destinyPosition -95 ;

 let navMenu = document.querySelector('.nav-menu'); // this is only to dissapear the burger menu after the event click
 navMenu.style.display = 'none';

 heading.classList.add('fade-in');

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

  if (!event.target.closest('.menu-links')) {
    this.classList.toggle("change");
  }
});


document.querySelectorAll('.menu-links').forEach(function(link) {
  link.addEventListener('click', function() {

    document.getElementById('containerButton').classList.remove('change');
  });
});


//scroll reveal
document.addEventListener("DOMContentLoaded", function() {
 
  // Inicia ScrollReveal
  let sr = ScrollReveal({
    reset: true // Ajusta esto a true para que las animaciones se repitan al hacer scroll hacia arriba y hacia abajo
});

  
  sr.reveal(".icons", {
      duration: 2500,
      origin: "top",
      distance: '400px'
  });

  sr.reveal(".col-md-6", {
      duration: 2500,
      origin: "left",
      distance: '400px'
  });

  sr.reveal(".container-card", {
      duration: 2500,
      origin: "bottom",
      distance: '400px'
  });

  
 
});

//function to smooth burger menu display
function fadeOutClick() {

 


  let heading = document.getElementById('heading');
  

  if (heading.classList.contains('fade-out')   ) {
      heading.classList.remove('fade-out');
      
      heading.classList.add('fade-in');
      
  } else {
      heading.classList.remove('fade-in');
      heading.classList.add('fade-out');
      
  }
 
}



