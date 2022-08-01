// https://miorita.scoalaweb.ro/playgrounds/hatchet
// Scrie un program care să o ajute pe Miorița să ridice baltagul și să îl aducă Vitoriei
function main(){ 
    reset()
    goToHatchet()
    pick("hatchet")
    goToVictoria()
    drop("hatchet")
}

function goToHatchet () {
    turnAround()
    superMove(5)
    turnRight()
    move()
    turnRight()
    superMove(4)

}

function goToVictoria () {
    turnAround()
    superMove(4)
    turnLeft()
    move()
    turnLeft()
    superMove(6)
}

function turnAround() {
turnRight()
turnRight()
}

function superMove(times = 1 ){
if (times <= 0) {
    return
    }

move()
superMove(times - 1)
}



