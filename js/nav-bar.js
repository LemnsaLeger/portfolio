
// getting the elements

    var menuIcon = document.querySelector('.menu-icon');
    var navbar  = document.querySelector('nav');
    var closeIcon = document.querySelector('.close-menu');


    closeIcon.classList.add('close');

    menuIcon.addEventListener("click",Navbar);

    function Navbar(){
        navbar.classList.add('open');
        menuIcon.classList.toggle('open');
        closeIcon.classList.toggle('close');
    }


    closeIcon.addEventListener("click", closeMenuBar);
    // close side menu bar

    function closeMenuBar(){
        navbar.classList.remove('open');
        menuIcon.classList.toggle('open');
        closeIcon.classList.toggle('close');
    }