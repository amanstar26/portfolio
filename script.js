let menuIcon = document.querySelector('#menu-icon');
let navbars = document.querySelector('.navigation');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbars.classList.toggle('active');
}


let sections = document.querySelectorAll('section');
let navbar = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navbar.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbars.classList.remove('active');
}