// Countdown
const countDownDate = new Date('July 15, 2023 00:00:00').getTime();
const updateCountdown = () => {
const now = new Date().getTime();
const distance = countDownDate - now;

const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById('days').innerHTML = days;
document.getElementById('hours').innerHTML = hours;
document.getElementById('minutes').innerHTML = minutes;
document.getElementById('seconds').innerHTML = seconds;

if (distance < 0) {
clearInterval(x);
document.getElementById('days').innerHTML = '00';
document.getElementById('hours').innerHTML = '00';
document.getElementById('minutes').innerHTML = '00';
document.getElementById('seconds').innerHTML = '00';
}
};

setInterval(updateCountdown, 1000);

// Slideshow animation
const images = document.querySelectorAll(".slideshow img");
let currentImage = 0;
images[currentImage].classList.add("active");

setInterval(() => {
images[currentImage].classList.remove("active");
currentImage = (currentImage + 1) % images.length;
images[currentImage].classList.add("active");
}, 3000);

// Reveal animation
const revealElement = (container) => {
const elementPosition = container.getBoundingClientRect().top;
const windowHeight = window.innerHeight;

if (elementPosition < windowHeight) {
container.classList.add("show");
}
};

const addScrollListener = (containerClass) => {
const container = document.querySelector(containerClass);
window.addEventListener("scroll", () => revealElement(container));
};

document.addEventListener("DOMContentLoaded", () => {
addScrollListener(".female-container");
addScrollListener(".male-container");
addScrollListener(".container-card");
addScrollListener(".quote-image");
addScrollListener(".quote-text");
addScrollListener(".thank-container");
addScrollListener(".paragraf-container");
addScrollListener(".kami");
addScrollListener(".gift-container");
addScrollListener(".bio-container");
addScrollListener(".bio-container-male");
});

// Function to check if the top of an element is in the viewport
const isTopInViewport = (element) => {
const rect = element.getBoundingClientRect();
return rect.top >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight);
};

// Function to handle scroll-triggered animation
const revealImage = () => {
const images = document.querySelectorAll('.gallery-img');
images.forEach((image) => {
if (isTopInViewport(image)) {
image.classList.add('active');
}
});
};

// Event listener for scrolling
window.addEventListener('scroll', revealImage);

// Modal box
const toggleButton = document.getElementById('btn');
const modal = document.querySelector('.modal');

const toggleModal = () => {
modal.classList.toggle('hide');
};

toggleButton.addEventListener('click', toggleModal);

// Audio control
const audio = document.getElementById("myAudio");

const togglePlay = () => {
audio.play();
};

toggleButton.addEventListener('click', togglePlay);