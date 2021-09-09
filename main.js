/* Toggle Menu */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

/* Selecao dos itens do menu */
const links = document.querySelectorAll('nav ul li a')

for (link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show')
    })
}

/* Header scroll */

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function() {
    if (window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
})

/* Testimonials Swiper */

const swiper = new Swiper('.swiper-container', {
    slidesperview: 1,
    pagination: {
        el:'.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true
})

/* Scroll Reveal : Show elements while scrolling */

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700, 
    reset: true
})

scrollReveal.reveal(`
#home .image, #home .text,
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimonials .testimonials,
#contact .text, #contact .links`, 
{ interval: 100 })