let frequencySlider;

function setup() {
    createCanvas(600, 400);
    frequencySlider = createSlider(10, 100, 20); // Frequency slider (min, max, default) multiplied by 10
    frequencySlider.position(10, 10);
    frequencySlider.style('width', '300px'); // Adjust the width of the slider if needed
}

function draw() {
    background(255);
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
