function showImages(circleId, imageContainerId) {
    const circleContainer = document.getElementById(circleId);
    circleContainer.style.visibility = 'visible'; // Show the container

    // List of image paths
    const images_complete = [
      'images/circle.png','images/heart.png','images/hexagon.png','images/kite.png',
      'images/octagon.png','images/parallelogram.png','images/semicircle.png','images/square.png',
      'images/square.png','images/star.png','images/triangle.png'
    ];
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }
        return array;
    }
    function playAudio() {
        var audio = document.getElementById("myAudio");
        audio.play();
    }
    // Function to select 4 random strings
    function selectRandomStrings() {
        // Shuffle the string array
        const shuffledStrings = shuffleArray([...images_complete]); // Copy the array and shuffle it

        // Select the first 4 strings from the shuffled array
        const shuffled_4 = shuffledStrings.slice(0, 4);

      
    }
    const images = [
        'images/circle.png','images/heart.png','images/hexagon.png'
      ];


    // Clear the image container before adding images
    const imageContainer = document.getElementById(imageContainerId);
    imageContainer.innerHTML = ''; // Clear previous images

    // Loop through the images array and create an img element for each
    images.forEach(imageSrc => {
        console.log('Loading image:', imageSrc); // Log image paths
        let img = document.createElement('img');
        img.src = imageSrc; // Set the source to the current image path
        img.alt = 'A locally hosted image'; // Customize as needed
        img.classList.add('image'); // Add a class for styling

        // Set random positions
        const circleSize = 300; // Size of the circle (same as the #circle-container)
        const imgSize = 150; // Max size of the images (or adjust according to your max-width)

        // Calculate random top and left positions
        const randomTop = Math.random() * (circleSize - imgSize);
        const randomLeft = Math.random() * (circleSize - imgSize);

        // Set the position and other styles for the image
        img.style.position = 'absolute'; // Position the image absolutely
        img.style.top = `${randomTop}px`;
        img.style.left = `${randomLeft}px`;

        imageContainer.appendChild(img); // Append the image to the image container
    });
}
const inputField = document.getElementById("userInput");
        const audio = document.getElementById("myAudio");
document.getElementById("userInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        submitInput();
        audio.play();
    }
});

// Function to handle the user input
function submitInput() {
    const input = document.getElementById("userInput").value;
    
    // Output to the console
    console.log("User input: " + input);

    // Display on the webpage
    document.getElementById("output").innerText = "You entered: " + input;
}



function displayInput() {
    const input = document.getElementById("userInput").value;
    document.getElementById("outputParagraph").innerText = "You entered: " + input;
}
// Add event listeners for each button
document.getElementById('show-images-button').addEventListener('click', function() {
    showImages('circle-container1', 'image-container1');
    showImages('circle-container2', 'image-container2');
});

document.getElementById('show-images-button2').addEventListener('click', function() {
    showImages('circle-container2', 'image-container2');
});

// function myFunction() {
//     var x = document.getElementById("circle-container");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }
// Listen for the "Enter" keypress on the input field

  function shufflesymbols(array) {
          for (let i = array.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [array[i], array[j]] = [array[j], array[i]]; // Swap elements
          }
          return array;
      }
      
          const shuffledImages = shufflesymbols([...images_complete]); // Copy the array and shuffle it

          // Select the first 4 images from the shuffled array
          const selectedImages = images.slice(0, 4);
    