function turnAround() {
  turnRight();
  turnRight();
}
function superMove(leftSteps) {
  move();
  if (leftSteps > 1) {
    superMove(leftSteps - 1);
  }
}
function theHatchet() {
  reset();
  gotoHatchet();
  pick("hatchet");
  deliverHatchet();
  drop("hatchet");
}
function gotoHatchet() {
  turnAround();
  superMove(5);
  turnRight();
  move();
  turnRight();
  superMove(4);
}

function deliverHatchet() {
  turnAround();
  superMove(4);
  turnLeft();
  move();
  turnLeft();
  superMove(6);
}
theHatchet();
turnAround();
move();
turnAround();
