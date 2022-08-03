// https://miorita.scoalaweb.ro/playgrounds/escape
// Scrie un program care să o ajute pe Miorița să ajungă la pășune
// Programul trebuie să funcționeze indiferent de configurația stânei.
reset();

function superMove(times = 1){
    if (times <= 0){
        return
    }
    move()
    superMove(times - 1)
}

if (canMove()){
    move
}

else {
    turnRight();
    move();
}

superMove(5);
