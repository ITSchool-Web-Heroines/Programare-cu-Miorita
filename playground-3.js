// https://miorita.scoalaweb.ro/playgrounds/escape
// Scrie un program care să o ajute pe Miorița să ajungă la pășune
// Programul trebuie să funcționeze indiferent de configurația stânei.
function superMove(){
    let n=[];
    for(let i=n.length;i>=0;i++){
        move();
        if(!canMove()){
           turnRight();
        }
        
    }
}
while(!canMove()){
    turnRight();
}
if(canMove()){
    superMove();
}
