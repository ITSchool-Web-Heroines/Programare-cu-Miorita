// Varianta lunga
/* 
reset();
for(let i = 0; i < 6; i++) {
    move();
}
turnRight();
for(let i = 0; i < 6; i++) {
    move();
}
turnRight();
for(let i = 0; i < 6; i++) {
    move();
}
turnRight();
for(let i = 0; i < 5; i++) {
    move();
}
turnRight();
for(let i = 0; i < 5; i++) {
    move();
}
turnRight();
for(let i = 0; i < 4; i++) {
    move();
}
turnRight();
for(let i = 0; i < 4; i++) {
    move();
}
turnRight();
for(let i = 0; i < 3; i++) {
    move();
}
turnRight();
for(let i = 0; i < 3; i++) {
    move();
}
turnRight();
for(let i = 0; i < 2; i++) {
    move();
}
turnRight();
for(let i = 0; i < 2; i++) {
    move();
}
turnRight();
for(let i = 0; i < 1; i++) {
    move();
}
turnRight();
for(let i = 0; i < 1; i++) {
    move();
} */
// Varianta scurta
reset();
let list = [6, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 1];
for (let way = 0; way < list.length; way++) {
  for (let i = 0; i < list[way]; i++) {
    move();
  }

  turnRight();
}
move();
