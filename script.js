const hamburgerMenu = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');

hamburgerMenu.addEventListener('click', ()=>{
    navbar.classList.toggle('active');
});

document.addEventListener('click', (e)=>{
    if(!hamburgerMenu.contains(e.target) && !navbar.contains(e.target)){
        navbar.classList.remove('active');
    }
});

