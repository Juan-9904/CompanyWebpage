document.addEventListener('DOMContentLoaded', function() {
    // Tu código que requiere que el DOM esté listo
});

    // JavaScript for scrolling to another section on "Discover More" click
document.querySelector('.discover-more').addEventListener('click', function() {
    // Scroll to the desired section (you can replace 'your-section-id' with the actual section ID)
    document.querySelector('#our-services').scrollIntoView({ behavior: 'smooth' });
});

$('.round').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $('.arrow').toggleClass('bounceAlpha');
});


const carrusel = document.querySelector(".carrusel-items");

let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
let intervalo = null;
let step = 1;
const start = () => {
  intervalo = setInterval(function () {
    carrusel.scrollLeft = carrusel.scrollLeft + step;
    if (carrusel.scrollLeft === maxScrollLeft) {
      step = step * -1;
    } else if (carrusel.scrollLeft === 0) {
      step = step * -1;
    }
  }, 10);
};

const stop = () => {
  clearInterval(intervalo);
};

carrusel.addEventListener("mouseover", () => {
  stop();
});

carrusel.addEventListener("mouseout", () => {
  start();
});

start();