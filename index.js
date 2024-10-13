document.addEventListener('DOMContentLoaded', function () {
const typingElement = document.getElementById('typing-text');
const audioElement = document.getElementById('background-audio');
let typingTimeout;
let index = 0;
const originalText = " Hi, my name is Sigmund. Thank you so much for playing my little game. If you have any questions just give me a holler.";

function typeText(text) {
    typingElement.innerHTML = ""; // Clear the text container
    index = 0;

    // Function to type out each character
    function type() {
        if (index < text.length) {
            typingElement.innerHTML += text.charAt(index);
            index++;
            typingTimeout = setTimeout(type, 10); // Adjust typing speed (100ms per character)
        } else {
            audioElement.pause(); // Stop the audio once typing is done
        }
    }

    type();
}

function changeText(newText) {
    clearTimeout(typingTimeout); // Stop any ongoing typing animation
    typeText(newText);
    
    // Play the audio and loop it
    audioElement.currentTime = 0; // Reset audio to start
    audioElement.play(); // Play the audio

    // Change back to the original text after a delay
    setTimeout(() => {
        clearTimeout(typingTimeout); // Clear any typing timeout
        typeText(originalText); // Type out the original text
    }, newText.length * 100 + 1000); // Wait for the new text to finish and then an additional 1000ms
}

// Initialize with default text
typeText(originalText);

});
const imageElement = document.getElementById('image1');

        imageElement.addEventListener('mouseover', function() {
            imageElement.src = "images/Gear2.png"; // Change to second image on hover
        });

        imageElement.addEventListener('mouseout', function() {
            imageElement.src = 'images/gear1.png'; // Change back to first image when not hovering
        });

        const imageElement1 = document.getElementById('image2');

        imageElement1.addEventListener('mouseover', function() {
            imageElement1.src = "images/Trophy1.png"; // Change to second image on hover
        });

        imageElement1.addEventListener('mouseout', function() {
            imageElement1.src = 'images/Trophy.png'; // Change back to first image when not hovering
        });


        const imageElement2 = document.getElementById('image3');

        imageElement2.addEventListener('mouseover', function() {
            imageElement2.src = "images/Dictionary2.png"; // Change to second image on hover
        });

        imageElement2.addEventListener('mouseout', function() {
            imageElement2.src = 'images/Dictionary1.png'; // Change back to first image when not hovering
        });

        