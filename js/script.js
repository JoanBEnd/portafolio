//toggle icon navbar

let menuIcon = document.querySelector("#menu-icon")
let navbar = document.querySelector(".navbar")

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



//scroll sections
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')


window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height =sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height){
            //activar navbar lines
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id+']').classList.add('active');
            });
            sec.classList.add("show-animate");
        }
        else{
            sec.classList.remove("show-animate");
           
        }
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100 );

}

let more = document.querySelectorAll(".more")
for (let i=0; more.length; i++ ){
    more[i].addEventListener('click', function(){
        more[i].parentNode.classList.toggle('active')
    });
}