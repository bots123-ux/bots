// script.js
document.addEventListener('DOMContentLoaded', function() {
    const heartButton = document.getElementById('heartButton');
    const gifContainer = document.getElementById('gifContainer');
    const motivationalMessage = document.getElementById('motivationalMessage');

    heartButton.addEventListener('click', function() {
        // Toggle the display of the GIF container
        if (gifContainer.style.display === 'none') {
            gifContainer.style.display = 'block'; // Show the GIF
            motivationalMessage.style.display = 'block'; // Show the motivational message
        } else {
            gifContainer.style.display = 'none'; // Hide the GIF
            motivationalMessage.style.display = 'none'; // Hide the motivational message
        }
    });
});