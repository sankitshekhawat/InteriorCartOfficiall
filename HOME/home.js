let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};


const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text', {
    delay: 200,
    origin: 'top'
});
sr.reveal('.hero-img', {
    delay: 450,
    origin: 'top'
});
sr.reveal('.icons', {
    delay: 500,
    origin: 'left'
});
sr.reveal('.scroll-down', {
    delay: 500,
    origin: 'right'
});







// Get the contact form popup element
var contactForm = document.getElementById("contactForm");

// Function to open the contact form popup
function openForm() {
    contactForm.style.display = "block";
}

// Function to close the contact form popup
function closeForm() {
    contactForm.style.display = "none";
}