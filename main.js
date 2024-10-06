function showImages(circleId, imageContainerId) {
    const circleContainer = document.getElementById(circleId);
    circleContainer.style.visibility = 'visible'; // Show the container

    // List of image paths
    const images = [
        'images/circle.png', // Update with your actual image paths
        'images/semicircle.png',
        'images/square.png'
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