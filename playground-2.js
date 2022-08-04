// https://miorita.scoalaweb.ro/playgrounds/hatchet
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
    superMove();
}
function deliverHatchet() {
    superMove(3);
    turnRight();
    superMove(4);
    turnLeft();
}

theHatchet();
