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

// When expertise box is clicked the info shows until clicked again
const expertises = document.querySelectorAll(".expertise-box");
expertises.forEach(expertise => {
    expertise.addEventListener("click", () => {
        expertise.classList.toggle("active");
    });
});


function readFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("my-btn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "block";
  }
}

typeEffect();