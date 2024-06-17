const images = document.querySelectorAll('.gallery-container img');
const modal = document.querySelector('.modal-overlay');
const modalImg = document.querySelector('.modal-overlay img');

images.forEach(image => {
    image.addEventListener('click', () => {
        modal.classList.add('active');
        modalImg.src = image.src.replace('-thumbnail', '');
    });
});

modal.addEventListener('click', () => {
    modal.classList.remove('active');
});