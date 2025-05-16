let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}

const text = document.querySelector(".sec-text");
const phrases = [
    "Web Developer",
    "UI Designer",
    "Front-End Developer",
    "Full-Stack Developer",
    "Software Engineer",
    "UX Designer",
    "Back-End Developer"
];

let currentPhrase = 0;
let currentChar = 0;
let isDeleting = false;

function typeEffect() {
    let currentText = phrases[currentPhrase];
    let displayText = currentText.substring(0, currentChar);
    text.textContent = displayText;

    if (!isDeleting && currentChar < currentText.length) {
        currentChar++;
        setTimeout(typeEffect, 100); // Typing speed
    } else if (isDeleting && currentChar > 0) {
        currentChar--;
        setTimeout(typeEffect, 50); // Deleting speed
    } else {
        if (!isDeleting) {
            isDeleting = true;
            setTimeout(typeEffect, 2000); // Pause before deleting
        } else {
            isDeleting = false;
            currentPhrase = (currentPhrase + 1) % phrases.length;
            setTimeout(typeEffect, 500); // Pause before typing next
        }
    }
}

typeEffect();