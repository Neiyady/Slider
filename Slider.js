let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const links = document.querySelectorAll('.links a');

function showSlide(index) {
    currentSlide = (index + slides.length) % slides.length;
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');

    links.forEach(link => link.classList.remove('active'));
    links[currentSlide].classList.add('active');
}

document.querySelector('.next').addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

document.querySelector('.prev').addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        showSlide(parseInt(dot.dataset.index));
    });
});

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        showSlide(parseInt(link.dataset.index));
    });
});
