let slideIndex = 0; // Declare slideIndex

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    if (slideIndex >= slides.length) slideIndex = 0; // Loop to the first slide
    if (slideIndex < 0) slideIndex = slides.length - 1; // Loop to the last slide

    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? 'block' : 'none'; // Show current slide
    });
}

// Function to change slides
function changeSlide(direction) {
    slideIndex += direction; // Update the slideIndex
    showSlides(); // Call to show the current slide
}

// Initialize the slider and show the first slide on page load
document.addEventListener('DOMContentLoaded', () => {
    showSlides(); // Show the first slide
});
