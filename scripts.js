document.getElementById('passwordForm').addEventListener('submit', function(event) {
    console.log("Form submitted"); // This should appear in the console

    event.preventDefault(); // Prevents the form from submitting in the traditional way

    var password = document.getElementById('passwordInput').value;

    if (password == '215') {
        window.location.href = 'homepage.html'; // Redirect to the content page
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

document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var passwordInput = document.getElementById('passwordInput');
    var password = passwordInput.value;

    if (password == '215') {
        window.location.href = 'homepage.html';
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

