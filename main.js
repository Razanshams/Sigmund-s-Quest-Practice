document.getElementById('show-images-button').addEventListener('click', function() {
    // List of image paths (add as many as you like)
    const circleContainer = document.getElementById('circle-container');
    circleContainer.classList.remove('hidden'); // Remove the hidden class
    
    const images = [
        'images/circle.png', // Replace with your image paths
        'images/semicircle.png',
        'images/square.png'
    ];
    
    const imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = ''; // Clear previous images

    // Loop through the images array and create an img element for each
    images.forEach(imageSrc => {
        // Create a new image element
        let img = document.createElement('img');
        img.src = imageSrc; // Set the source to the current image path
        img.alt = 'A locally hosted image'; // Customize as needed
        img.classList.add('image'); // Add a class for styling
        
        // Append the image to the image container
        imageContainer.appendChild(img);
    });
});