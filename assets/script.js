  // responsive navbar
  document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector('.navbar');
    const listIcon = document.querySelector('.navbar-list');
  
    listIcon.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });
  });

