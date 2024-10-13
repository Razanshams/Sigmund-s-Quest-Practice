document.addEventListener('DOMContentLoaded', function () {
    const item1 = document.getElementById('item1');
    if (item1) {
        item1.addEventListener('click', function () {
            localStorage.setItem('n', 4);
            localStorage.setItem('card_set', 'shapes');
            localStorage.setItem('card_remain', 5);
        });
    } else {
        console.error('item1 element not found');
    }

// document.getElementById('item3').addEventListener('click', function() {
//     localStorage.setItem('n', 6);
//     localStorage.setItem('card_set', "shapes");
//     localStorage.setItem('card_remain',5)
//     });

let symbols_number= localStorage.getItem('n');
let card_set = localStorage.getItem('card_set');
let n= localStorage.getItem('n');
let cards_remaining= localStorage.getItem('card_remain')

// if(card_set == "shapes"){
    set= card_set=="shapes"? [
        'images/ShapesSymbols/circle.png', 'images/ShapesSymbols/heart.png', 'images/ShapesSymbols/hexagon.png', 'images/ShapesSymbols/kite.png',
        'images/ShapesSymbols/octagon.png', 'images/ShapesSymbols/parallelogram.png', 'images/ShapesSymbols/semicircle.png', 
        'images/ShapesSymbols/square.png', 'images/ShapesSymbols/star.png', 'images/ShapesSymbols/triangle.png','images/ShapesSymbols/rectangle.png',
        'images/ShapesSymbols/trapezoid.png', 'images/ShapesSymbols/pentagon.png'
    ]: 0;
   
// }

function getRandomInt(i, j) {
    return Math.floor(Math.random() * (j - i + 1)) + i;
}
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}
function separatecards(set,n){

    let shuffle_array =shuffleArray(set,n);
    let images_set1=shuffle_array.slice(0,n);
    let images_set2= shuffle_array.slice(n,2*n-1);
    images_set2.unshift(images_set1[0]);
    return [images_set1,images_set2];
}
function showImages(circleId, imageContainerId,image_set) {
    const circleContainer = document.getElementById(circleId);
    circleContainer.style.visibility = 'visible';

    function playAudio() {
        var audio = document.getElementById("myAudio");
        audio.play();
    
    }
    
   
    const imageContainer = document.getElementById(imageContainerId);
    imageContainer.innerHTML = ''; 
   
    
    image_set.forEach(imageSrc => {
        console.log('Loading image:', imageSrc); 
        let img = document.createElement('img');
        img.src = imageSrc; 
        img.alt = 'img'; 
        img.classList.add('image'); 
        
        
        const circleSize = 500; 
        const imgSize = 150; 

        const randomTop =  Math.random() * (circleSize - imgSize) ;
        const randomLeft = Math.random() * (circleSize - imgSize) ;
        
        img.style.position = 'absolute'; 
        img.style.top = `${randomTop}px`;
        img.style.left = `${randomLeft}px`;

        imageContainer.appendChild(img); 
    });
}
let x;
document.getElementById('item4').addEventListener('click', function() {
    x = separatecards(set,n);
    showImages('circle-container1', 'image-container1',x[0]);
    showImages('circle-container2', 'image-container2',x[1]);
    const buttonContainer = document.getElementById("item4");
    buttonContainer.style.visibility = 'hidden';
});
const inputField = document.getElementById("userInput");
        const audio = document.getElementById("myAudio");
document.getElementById("userInput").addEventListener("keydown", function(event,x) {
    if (event.key === "Enter") {
        
        x = submitInput(set,n);
        return x;
    }
});

// Function to handle the user input
function submitInput(set,n) {
    const input = document.getElementById("userInput").value;
    
    if (input==pathToName(x[0][0])) {
       cards_remaining=cards_remaining-1;
       document.getElementById('cards_remaining').innerHTML = cards_remaining;
       audio.play();
       x = separatecards(set,n);
       showImages('circle-container1', 'image-container1',x[0]);
       showImages('circle-container2', 'image-container2',x[1]);
    }

    // Display on the webpage
    document.getElementById("output").innerText = "You entered: " + input;
    return x;
    if (cards_remainging== 0){
        document.getElementById('box').style.display = 'block';

    }
}



function displayInput() {
    const input = document.getElementById("userInput").value;
    document.getElementById("outputParagraph").innerText = "You entered: " + input;
}
// Add event listeners for each button





// function myFunction() {
//     var x = document.getElementById("circle-container");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }
// Listen for the "Enter" keypress on the input field

 
    

function pathToName(path) {
    let filename = path.split('/').pop();
    return filename.split('.')[0];
}
});
