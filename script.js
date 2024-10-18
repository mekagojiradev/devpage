function setup() {
  // Create a canvas and attach it to the 'canvas-container' div
  let canvas = createCanvas(600, 400);
  canvas.parent('canvas-container'); // Attach canvas to the div with ID 'canvas-container'
}

function draw() {
  background(220); // Set the background color for the canvas
  
  // Safely get the input field value
  let inputElement = document.getElementById('myInput');
  if (inputElement) {
    let inputValue = inputElement.value; // Read the input field value
    console.log(inputValue); // Log it to the console
    
    // Display input value on the canvas
    textSize(32);
    fill(0);
    text(inputValue, 50, height / 2); // Display the input value in the center of the canvas
  } else {
    console.error('Input element not found');
  }
}
