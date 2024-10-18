let frequencySlider;

function setup() {
  let canvasContainer = document.getElementById('canvas-container');
  if (canvasContainer) {
    let cnv = createCanvas(600, 400);
    cnv.parent(canvasContainer);  // Attach canvas to div with ID 'canvas-container'
  } else {
    console.error('Canvas container not found');
  }
}

function draw() {
  background(220);
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
