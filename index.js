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
      