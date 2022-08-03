function facefreeFence() {
  while (canMove()) {
    move();
  }
}
function rightfreeFence() {
  turnRight();
  facefreeFence();
}
function tailfreeFence() {
  turnRight();
  facefreeFence();
}
function leftfreeFence() {
  turnRight();
  facefreeFence();
}
if (canMove()) {
  facefreeFence();
} else {
  rightfreeFence();
  tailfreeFence();
  leftfreeFence();
}
