// https://miorita.scoalaweb.ro/lessons/3-while
// Scrie un program care să o ajute pe Miorița să ajungă la pășunea din centrul spiralei

let lista = [6, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 1, 1];

for (let culoar = 0; culoar < lista.length; culoar++) {
  for (let i = 0; i < lista[culoar]; i++) {
    move();
  }
  turnRight();
}
turnRight();
