// https://miorita.scoalaweb.ro/playgrounds/hatchet
// Scrie un program care să o ajute pe Miorița să ridice baltagul și să îl aducă Vitoriei

move();
pick("hatchet");
turnRight();
for (let i = 0; i < 4; i++) {
  move();
}
turnRight();
turnRight();
turnRight();
for (let i = 0; i < 2; i++) {
  move();
}

drop("hatchet");
