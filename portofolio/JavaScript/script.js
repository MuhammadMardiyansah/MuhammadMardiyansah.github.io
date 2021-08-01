const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');
// const header = document.querySelector('header');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
});

// scroll
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 150){
            $('nav').addClass("sticky");
        }else{
            $('nav').removeClass("sticky");
        }
    })

})