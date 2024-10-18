const konamiCode = [
    'ArrowUp', 'ArrowUp',
    'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight',
    'ArrowLeft', 'ArrowRight',
    'a', 'b',
    'Enter'
];

let input = [];

// Listen for key presses
document.addEventListener('keydown', (event) => {
    input.push(event.key);

    // Check if the input matches the Konami code
    if (input.length > konamiCode.length) {
        input.shift(); // Remove the oldest entry to keep the array size manageable
    }

    if (input.toString() === konamiCode.toString()) {
        // Replace the entire body with the image
        document.body.innerHTML = '<img src="secret.gif" alt="Secret Image" style="width:100%; height:auto;">';
    }
});
