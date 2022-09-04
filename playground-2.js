// https://miorita.scoalaweb.ro/playgrounds/hatchet
// Scrie un program care să o ajute pe Miorița să ridice baltagul și să îl aducă Vitoriei

function main() {
    reset()
    move()
    pick("hatchet")
    goToVitoria()
    drop("hatchet")
}

function goToVitoria(){
    superMove(3)
    turnRight()
    superMove(4)
}

function superMove(times = 1){
    if (times <=0){
        return
    }
    move()
    superMove(times -1)
}