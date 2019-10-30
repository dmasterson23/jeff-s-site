let mainNav = document.getElementById('js-menu');

let navBarToggle = document.getElementById('js-navbar-toggle');

let navBarClose = document.getElementById('js-navbar-close');

navBarToggle.addEventListener('click', function(){
  mainNav.classList.toggle('active');
});

 navBarClose.addEventListener('click', function()
 {
mainNav.classList.toggle('active') 
 });

