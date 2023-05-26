function setup() {}
function draw() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  if (keyIsPressed) {
    switch (key) {
      case "q" || "Q":
        cuadrados();
        break;
      case "w" || "W":
        bass();
        break;
      case "e" || "E":
        eer();
        break;
      default:
        break;
    }
  }
}
function cuadrados() {
  fill("red");
  noStroke();

  rect(0, windowHeight / 2, windowWidth, 30);
  rect(0, windowHeight / 2 + 35, windowWidth, 30);
  rect(0, windowHeight / 2 + 70, windowWidth, 30);
}
function bass() {
  fill(255);
  circle(windowWidth / 2, windowHeight / 2, 500);
}
function eer() {
  fill(0, 103, 255);
  for (let x = 0; x <= windowWidth * 0.9; x += 150) {
    cicle(x, windowHeight / 2, 150);
  }
}
