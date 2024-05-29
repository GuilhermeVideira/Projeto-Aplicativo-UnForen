function toggleMenu() {
    document.getElementById("myMenu").classList.toggle('active');
    document.getElementById("overlay").classList.toggle('active');
}

function closeMenu() {
    document.getElementById("myMenu").classList.remove('active');
    document.getElementById("overlay").classList.remove('active');
}

document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const cards = document.querySelectorAll('.card');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let index = 0;

    function updateCarousel() {
        track.style.transform = `translateX(${-index * cards[0].offsetWidth}px)`;
    }

    function nextSlide() {
        index++;
        if (index > cards.length - 1) {
            index = 0;
        }
        updateCarousel();
    }

    function prevSlide() {
        index--;
        if (index < 0) {
            index = cards.length - 1;
        }
        updateCarousel();
    }

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
});
