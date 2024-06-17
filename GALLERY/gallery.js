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




var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function plusSlides(n) {
    showSlides((slideIndex += n));
}