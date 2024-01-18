document.getElementById('passwordForm').addEventListener('submit', function(event) {
    console.log("Form submitted"); // This should appear in the console

    event.preventDefault(); // Prevents the form from submitting in the traditional way

    var password = document.getElementById('passwordInput').value;

    if (password == '215') {
        window.location.href = 'homepage.html'; // Redirect to the content page
    } else {
        // Show shake animation
        passwordInput.classList.add('shake');

        // Remove the class after animation ends (0.82s is the animation duration)
        setTimeout(() => {
            passwordInput.classList.remove('shake');
        }, 820);

        document.getElementById('message').innerHTML = '<p>Incorrect Passcode</p>';
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const logoImage = document.getElementById('logo-image');

    let rotationSpeed = 4; // Initial rotation speed in seconds

    logoImage.addEventListener('click', () => {
        // Toggle rotation speed betwseen 4 seconds and a new speed (e.g., 2 seconds)
        rotationSpeed = (rotationSpeed === 4) ? 0.2 : 4;
        logoImage.style.animation = `rotation ${rotationSpeed}s infinite linear`;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const loadingDots = document.querySelector('.loading-dots');
    let dotCount = 0;

    setInterval(() => {
        loadingDots.textContent = '.'.repeat(dotCount % 4);
        dotCount++;
    }, 500); // Adjust time as needed
});


