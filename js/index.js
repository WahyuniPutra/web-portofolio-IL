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

// Function to start the tour
function startTour() {
    const tour = new Shepherd.Tour({
        defaultStepOptions: {
            cancelIcon: { enabled: true },
            classes: 'class-1 class-2',
            scrollTo: { behavior: 'smooth', block: 'center' },
            useModalOverlay: true, // Add dark overlay
        }
    });

    // Step 1: Highlight "About" Navigation
    tour.addStep({
        title: 'Navigasi: About',
        text: 'Klik di sini untuk melihat informasi lebih lanjut tentangku.',
        attachTo: { element: 'a[href="about.html"]', on: 'bottom' },
        buttons: [
            {
                action() { 
                    this.next(); // Move to next step
                    this.hide(); // Hide the text immediately
                },
                text: 'Next'
            }
        ],
        beforeShowPromise: () => {
            return new Promise((resolve) => {
                // Optionally you can add some effect here
                resolve();
            });
        }
    });

    // Step 2: Introduction
    tour.addStep({
        title: 'Perkenalan',
        text: 'Ini adalah bagian perkenalan tentang siapa aku dan apa saja ketertarikanku.',
        attachTo: { element: '.intro', on: 'bottom' },
        buttons: [
            {
                action() { 
                    this.back(); // Go back
                    this.hide(); // Hide the text immediately
                },
                classes: 'shepherd-button-secondary',
                text: 'Back'
            },
            {
                action() { 
                    this.next(); // Move to next step
                    this.hide(); // Hide the text immediately
                },
                text: 'Next'
            }
        ]
    });

    // Step 3: Image Slider
    tour.addStep({
        title: 'Galeri Gambar',
        text: 'Berikut adalah beberapa gambar dalam slider ini.',
        attachTo: { element: '.slider', on: 'top' },
        buttons: [
            {
                action() { 
                    this.back(); // Go back
                    this.hide(); // Hide the text immediately
                },
                classes: 'shepherd-button-secondary',
                text: 'Back'
            },
            {
                action() { 
                    this.next(); // Move to next step
                    this.hide(); // Hide the text immediately
                },
                text: 'Next'
            }
        ]
    });

    // Step 4: Contact
    tour.addStep({
        title: 'Kontak dan Media Sosial',
        text: 'Hubungi aku atau temukan aku di media sosial.',
        attachTo: { element: 'footer', on: 'top' },
        buttons: [
            {
                action() { 
                    this.cancel(); // End the tour
                    this.hide(); // Hide the text immediately
                },
                text: 'Finish'
            }
        ]
    });

    // Start the tour
    tour.start();
}

// Initialize the slider and show the first slide on page load
document.addEventListener('DOMContentLoaded', () => {
    showSlides(); // Show the first slide
});
