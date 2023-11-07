document.addEventListener("DOMContentLoaded", function() {
    const logoImage = document.getElementById('logo-image');

    let rotationSpeed = 4; // Initial rotation speed in seconds

    logoImage.addEventListener('click', () => {
        // Toggle rotation speed between 4 seconds and a new speed (e.g., 2 seconds)
        rotationSpeed = (rotationSpeed === 4) ? 0.2 : 4;
        logoImage.style.animation = `rotation ${rotationSpeed}s infinite linear`;
    });
});