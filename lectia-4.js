// https://miorita.scoalaweb.ro/lessons/4-function
// Scrie un program care să o ajute pe Miorița să ridice baltagul și să îl aducă Vitoriei

turnRight();
turnRight();

for (let i = 0; i < 5; i++) {
  move();
}

turnRight();
move();
turnRight();

for (let i = 0; i < 4; i++) {
  move();
}

pick("hatchet");

turnRight();
turnRight();

for (let i = 0; i < 4; i++) {
  move();
}

turnRight();
turnRight();
turnRight();

move();

turnRight();
turnRight();
turnRight();

for (let i = 0; i < 5; i++) {
  move();
}

drop("hatchet");
