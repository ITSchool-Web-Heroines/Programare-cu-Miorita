// https://miorita.scoalaweb.ro/playgrounds/escape
// Scrie un program care să o ajute pe Miorița să ajungă la pășune
// Programul trebuie să funcționeze indiferent de configurația stânei.

let free = false;
while (free != true) {
  if (canMove()) {
    free = true;
    while (canMove()) {
      move();
    }
  } else {
    turnRight();
  }
}
