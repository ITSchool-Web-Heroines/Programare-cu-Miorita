// https://miorita.scoalaweb.ro/playgrounds/escape
// Scrie un program care să o ajute pe Miorița să ajungă la pășune
// Programul trebuie să funcționeze indiferent de configurația stânei.
reset();
// let free = canMove();
if (canMove()) {
  superMove();
} else {
  turnRight();
  superMove();
}

function superMove(times = 1) {
  for (var i = 0; i < times; i = i + 1) {
    move();
  }
}
