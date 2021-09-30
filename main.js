/* Toggle Menu */
const nav = document.querySelector("#header nav")
const toggle = document.querySelectorAll("nav .toggle")

for (const element of toggle) {
  element.addEventListener("click", function () {
    nav.classList.toggle("show")
  })
}

/* Selecao dos itens do menu */
const links = document.querySelectorAll("nav ul li a");

for (link of links) {
  link.addEventListener("click", function () {
    nav.classList.remove("show")
  })
}

/* Header scroll */
  const header = document.querySelector("#header")
  const navHeight = header.offsetHeight

function changeHeaderOnScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add("scroll")
  } else {
    header.classList.remove("scroll")
  }
}

/* Testimonials Swiper */

const swiper = new Swiper(".swiper-container", {
  slidesperview: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  //mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
     setWrapperSize: true
    }
  }
})

/* Scroll Reveal : Show elements while scrolling */

const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "25px",
  duration: 600,
  reset: true,
})

scrollReveal.reveal(
`#home .image, #home .text,
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimonials .testimonials,
#contact .text, #contact .links,
footer .brand, footer .social`,
  { interval: 100 }
)

// Back to top button
const backToTopButton = document.querySelector(".back-to-top")

function backToTop(){    
    if (window.scrollY >= 560) {
        backToTopButton.classList.add("show")
    } else {
        backToTopButton.classList.remove("show")
    }
}

// Link ativo
const sections = document.querySelectorAll('main section[id]')
function activeMenuCurrentSection() {
  //Guardar variável do eixo Y (Vertical) da page
  const limite = window.pageYOffset
  
  for (const section of sections) {
    //Guardar o topo da section
    const sectionTop = section.offsetTop
    //Guardar altura da section
    const sectionHeight = section.offsetHeight
    //Pegar o id da section atual
    const sectionId = section.getAttribute('id')

    const limiteEntrada = limite >= sectionTop
    const limiteSaida = limite <= sectionTop + sectionHeight

    if (limiteEntrada && limiteSaida) {
      document.querySelector('nav ul li a[href*=' + sectionId +']').classList.add('active')
    } else {
      document.querySelector('nav ul li a[href*=' + sectionId +']').classList.remove('active')
    }
  }
}

// Page Scroll 
window.addEventListener("scroll", function(){
    changeHeaderOnScroll()
    backToTop()
    activeMenuCurrentSection()
})
