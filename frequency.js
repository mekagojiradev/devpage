let frequencySlider;

function setup() {
    createCanvas(windowWidth * 0.8, 400);
    frequencySlider = createSlider(10, 100, 10); // Frequency slider (min, max, default)
    
    // Position the slider relative to the canvas
    frequencySlider.parent(select('main'));
    //frequencySlider.position(width, height + 10); // Set y position below the canvas
    frequencySlider.style('width', '300px'); // Adjust the width of the slider if needed
}

function draw() {
    background(color('#222222'));
    let frequency = frequencySlider.value() / 10; // Divide by 10 to get decimal values (range from 1 to 10)
    stroke(0);
    strokeWeight(15);
    noFill();
    beginShape();
    for (let x = 0; x < width; x++) {
        let y = height / 2 + sin(TWO_PI * frequency * (x / width)) * 100;
        vertex(x, y);
    }
    endShape();
}
