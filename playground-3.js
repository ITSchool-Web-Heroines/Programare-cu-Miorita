// https://miorita.scoalaweb.ro/playgrounds/escape
// Scrie un program care să o ajute pe Miorița să ajungă la pășune
// Programul trebuie să funcționeze indiferent de configurația stânei.
function turnAround(){
    turnRight();
}

while(! canMove()){
    turnAround();
}

function superMove(){
    let n=[];
    for(let i=n.length;i>=0;i++){
        move();
        if(!canMove()){
            turnAround();
        }
        
    }
}
if(canMove()){
    superMove();
}