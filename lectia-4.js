// https://miorita.scoalaweb.ro/lessons/4-function
// Scrie un program care să o ajute pe Miorița să ridice baltagul și să îl aducă Vitoriei
function turnAround() {
  turnLeft();
  turnLeft();
}

function superMove(leftSteps = 1) {
  move();

  if (leftSteps > 1) superMove(leftSteps - 1);
}

const toPick = "hatchet";

function theHatchet() {
  reset();
  goToHatchet();
  pick(toPick);
  deliverHatchet();
  drop(toPick);
}

function goToHatchet() {
  turnAround();
  superMove(5);
  turnRight();
  superMove();
  turnRight();
  superMove(4);
}
function deliverHatchet() {
  turnAround();
  superMove(4);
  turnLeft();
  superMove();
  turnLeft();
  superMove(6);
}

theHatchet();
