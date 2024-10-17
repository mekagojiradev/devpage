let frequencySlider;

function setup() {
    const canvas = createCanvas(600, 400);
    canvas.parent('canvas-container'); // Attach the canvas to the specified div
    frequencySlider = select('#frequencySlider'); // Select the slider by its ID
}

function draw() {
    background(255);
    let frequency = frequencySlider.value();
    stroke(0);
    noFill();
    beginShape();
    for (let x = 0; x < width; x++) {
        let y = height / 2 + sin(TWO_PI * frequency * (x / width)) * 100; // Adjusted sine wave
        vertex(x, y);
    }
    endShape();
}
