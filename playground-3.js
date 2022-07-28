// https://miorita.scoalaweb.ro/playgrounds/escape
// Scrie un program care să o ajute pe Miorița să ajungă la pășune
// Programul trebuie să funcționeze indiferent de configurația stânei.

let j = 0;
while (j != 1) {
  if (canMove()) {
    j = 1;
    move();
  } else {
    turnRight();
  }
}
