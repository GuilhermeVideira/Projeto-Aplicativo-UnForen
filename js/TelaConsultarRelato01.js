function toggleMenu() {
    document.getElementById("myMenu").classList.toggle('active');
    document.getElementById("overlay").classList.toggle('active');
}

function closeMenu() {
    document.getElementById("myMenu").classList.remove('active');
    document.getElementById("overlay").classList.remove('active');
}

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const pageNumber = document.querySelector('.page-number');
const cardPages = document.querySelectorAll('.card-page');

let currentPage = 0;

function showPage(page) {
    cardPages.forEach((cardPage, index) => {
        cardPage.style.display = index === page ? 'block' : 'none';
    });
}

prevBtn.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
        pageNumber.textContent = currentPage + 1;
    }
});

nextBtn.addEventListener('click', () => {
    if (currentPage < cardPages.length - 1) {
        currentPage++;
        showPage(currentPage);
        pageNumber.textContent = currentPage + 1;
    }
});

showPage(currentPage);


