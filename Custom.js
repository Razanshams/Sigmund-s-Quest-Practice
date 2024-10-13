const button = document.getElementById('openPageButton');

button.addEventListener('click', () => {
    window.location.href = 'Game.html'; // Specify the path to your local HTML file
});

function saveSelections() {
    const colorSelect = document.getElementById('symbol_number');
    const fruitSelect = document.getElementById('cards_number');

    const selectedsymnum = colorSelect.value; // Get selected color
    const selectedcardnum = fruitSelect.value; // Get selected fruit

    // Store selections in local storage
    localStorage.setItem('SelectedColor', selectedsymnum);
    localStorage.setItem('SelectedFruit', selectedcardnum);

    alert('Selections saved!'); // Optional alert to confirm saving
}

// Event listener for button click
document.getElementById('openPageButton').addEventListener('click', saveSelections);

