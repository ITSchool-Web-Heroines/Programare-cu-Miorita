// https://miorita.scoalaweb.ro/lessons/3-while
// Scrie un program care să o ajute pe Miorița să ajungă la pășunea din centrul spiralei
reset();
//partea asta cu lista nu am reusit sa o scriu singura
let list = [6, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 1, 1];
for (let culoar = 0; culoar < list.length; culoar++) {
  for (let i = 0; i < list[culoar]; i = i + 1) {
    move();
  }
  turnRight();
}

//partea asta am scris-o eu
// for (let i = 0; i < 6; i = i + 1) {
//   move();
// }
// turnRight();
// for (let i = 0; i < 6; i = i + 1) {
//   move();
// }
// turnRight();
// for (let i = 0; i < 6; i = i + 1) {
//   move();
// }
// turnRight();
// for (let i = 0; i < 5; i = i + 1) {
//   move();
// }
// turnRight();
// for (let i = 0; i < 5; i = i + 1) {
//   move();
// }
// turnRight();
// for (let i = 0; i < 4; i = i + 1) {
//   move();
// }
// turnRight();
// for (let i = 0; i < 4; i = i + 1) {
//   move();
// }
// turnRight();
// for (let i = 0; i < 3; i = i + 1) {
//   move();
// }
// turnRight();
// for (let i = 0; i < 3; i = i + 1) {
//   move();
// }
// turnRight();
// for (let i = 0; i < 2; i = i + 1) {
//   move();
// }
// turnRight();
// for (let i = 0; i < 2; i = i + 1) {
//   move();
// }
// turnRight();
// for (let i = 0; i < 1; i = i + 1) {
//   move();
// }
// turnRight();
// for (let i = 0; i < 1; i = i + 1) {
//   move();
// }
