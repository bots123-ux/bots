function showMailbox() {
    const mailbox = document.querySelector(".mailbox");
    mailbox.style.display = "flex"; // Show the mailbox
}

function showImages() {
    const letter = document.querySelector(".letter");
    letter.style.display = "flex"; // Show the letter

    const images = document.querySelectorAll(".gallery-image");
    images.forEach((image, index) => {
        setTimeout(() => {
            image.style.opacity = 1; // Fade in the image
        }, index * 300); // Delay each image's appearance
    });

    document.getElementById("showButton").style.display = "none"; // Hide the button after clicking
    document.getElementById("showMoreButton").style.display = "none"; // Hide the "Show More" button after clicking
}