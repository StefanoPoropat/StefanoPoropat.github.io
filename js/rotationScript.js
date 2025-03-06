const $ = selector => document.querySelector(selector);

let currentIndex = 0; // Track the current index of the active image
const totalImages = 5; // Total number of images

function updateCarousel() {
    const list = $(".list");
    // Calculate the offset based on the current index
    list.style.transform = `translateX(-${currentIndex * 200}px)`;
    
    // Remove all previous classes
    document.querySelectorAll(".list li").forEach(li => {
        li.classList.remove("prev", "act", "next", "new-next", "hide");
    });

    // Set classes for the current images
    const images = list.children;
    images[currentIndex].classList.add("act"); // Current active image
    images[(currentIndex + totalImages - 1) % totalImages].classList.add("prev"); // Previous image
    images[(currentIndex + 1) % totalImages].classList.add("next"); // Next image

    // Set visibility for new next image
    images[(currentIndex + 2) % totalImages].classList.add("new-next");
}

function next() {
    currentIndex = (currentIndex + 1) % totalImages; // Increment index
    updateCarousel();
}

function prev() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Decrement index
    updateCarousel();
}

// Click event for images
function slide(element) {
    const index = Array.from($(".list").children).indexOf(element);
    if (index === (currentIndex + 1) % totalImages) {
        next();
    } else if (index === (currentIndex + totalImages - 1) % totalImages) {
        prev();
    }
}

const slider = $(".list"),
    swipe = new Hammer($(".swipe"));

slider.onclick = event => {
    slide(event.target.closest('li')); // Ensure we get the correct list item
};

swipe.on("swipeleft", () => {
    next();
});

swipe.on("swiperight", () => {
    prev();
});

// Initial carousel setup
updateCarousel();
