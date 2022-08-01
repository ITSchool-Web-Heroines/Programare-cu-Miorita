// Varianta simpla
reset();
/* if (canMove()) {
  move();
  move();
  move();
} else {
  turnLeft();
  move();
  turnRight();
  move();
  move();
  move();
}
*/
// Varianta if else
/* 
reset();
if (canMove()) {
  move();
  move();
  move();
} 
else {
  turnLeft();
  move();
  turnRight();
  move();
  move();
  move();
}
*/
// Cu variabila
reset();
let able;
able = canMove();
if (able) {
  move();
  move();
  move();
}
if (!able) {
  turnLeft();
  move();
  turnRight();
  move();
  move();
  move();
}
