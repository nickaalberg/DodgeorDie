var x, y;
function setup() {
  createCanvas(720, 400);
  x = width / 2;
  y = height;
}

function draw() {
  background(200);
  stroke(50);
  fill(100);
  triangle(30 + x, 75, 58 + x, 20, 86 + x, 75);
  x = x - 8;
  if (x < 0) {
    x = width;
  }
}
