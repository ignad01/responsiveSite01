const navSlide = ()=>{
    const nav = document.querySelector('.nav-link');
    const burger = document.querySelector('.hambg');
    const navlinks = document.querySelectorAll('.nav-link li'); 

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');

        navlinks.forEach((link,index) =>{
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.5}s`;
            }
        });
    });
}  

navSlide();