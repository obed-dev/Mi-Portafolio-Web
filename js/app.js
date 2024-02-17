
//burger menu
document.addEventListener('DOMContentLoaded', function() {
  var navMenu = document.querySelector('.nav-menu');
  var navbarToggler = document.querySelector('.navbar-toggler');

  navMenu.style.display = 'none';

  navbarToggler.addEventListener('click', function() {
      if (navMenu.style.display === 'none') {
          navMenu.style.display = 'block';
      } else {
          navMenu.style.display = 'none';
      }
  });
});


