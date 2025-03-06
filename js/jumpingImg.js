window.onload = function() {
    const image = document.getElementById('jumpingImage');

    function jump() {
        // Fade in and jump up
        image.style.opacity = '1'; // Fade in
        image.style.bottom = '30vh'; // Jump to the middle of the viewport

        // After 1.5 seconds at the top, fall back down
        setTimeout(() => {
            image.style.bottom = '-100px'; // Fall back down
            image.style.opacity = '0'; // Fade out
        }, 2000); // Stay at the top for 1.5 seconds
    }

    // Start the jump animation after 2 seconds
    setTimeout(() => {
        jump(); // Start the first jump
        setInterval(jump, 4000); // Loop every 4 seconds (1.5 seconds at the top + 1.5 seconds for fall)
    }, 2000); // Initial delay before starting the loop
};