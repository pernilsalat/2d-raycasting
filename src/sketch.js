let boundary;
let ray;

function setup() {
  createCanvas(400, 480);
  boundary = Boundary(300, 100, 300, 300);
  ray = Ray(100, 200);
}

function draw() {
  background(0);
  boundary.show();
  ray.show();

  let pt = ray.cast(boundary);
  // console.log(pt)
  // if (pt) {
  //   fill(255);
  //   ellipse(pt.x, pt.y, 8, 8);
  // }
}
