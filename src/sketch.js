let boundaries = [];
let particle;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 5; i++) {
    const x1 = random(width);
    const x2 = random(width);
    const y1 = random(height);
    const y2 = random(height);
    boundaries.push(Boundary(x1, y1, x2, y2));
  }
  boundaries.push(Boundary(0, 0, width, 0));
  boundaries.push(Boundary(width, 0, width, height));
  boundaries.push(Boundary(width, height, 0, height));
  boundaries.push(Boundary(0, height, 0, 0));
  particle = Particle();
}

function draw() {
  background(0);
  for (let boundary of boundaries) {
    boundary.show();
  }
  particle.update(mouseX, mouseY);
  particle.show();
  particle.look(boundaries);
}
