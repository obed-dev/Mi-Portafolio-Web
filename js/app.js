
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

  //scroll btn main homepage 
  document.getElementById("about").addEventListener("click", function(e) {
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

  let destino = document.getElementById("skills-scroll");
  let destinoPosicion = destino.offsetTop;
  let posicionAjustada = destinoPosicion - 95;

  window.scrollTo({
      top: posicionAjustada,
      behavior: "smooth"
  });
});

document.getElementById("contact").addEventListener("click", function(e) {
  e.preventDefault();

  let destino = document.getElementById("");
  let destinoPosicion = destino.offsetTop;
  let posicionAjustada = destinoPosicion - 95;

  window.scrollTo({
      top: posicionAjustada,
      behavior: "smooth"
  });
});


//btn scroll burger menu
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
 let about  = document.getElementById("skills-scroll");
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













//btn scroll top
  window.addEventListener("scroll", function() {
    let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
    let scrollUp = document.getElementById("scroll-up");
  
    if (scrollPosition > 100) {
      scrollUp.style.opacity = "1";
    } else {
     scrollUp.style.opacity = "0";
    }
  });





  //hero function
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


