function theHatchet() {
  moveandPick();
  deliverHatchet();
}
function moveandPick() {
  move();
  pick("hatchet");
}
function deliverHatchet() {
  while (canMove()) {
    move();
  }
  if (!canMove()) {
    turnRight();
  }
  while (canMove()) {
    move();
  }
  if (!canMove()) {
    drop("hatchet");
    turnRight();
    move();
  }
}
reset();
moveandPick();
deliverHatchet();
