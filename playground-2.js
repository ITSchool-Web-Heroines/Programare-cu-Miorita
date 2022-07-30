/*
reset();

function turnAround()
{
    turnRight();
    turnRight();
}


function superMove (times = 1)
{
    for (var i = 0; i < times; i = i+1){
        move(); 
    }
}


superMove();
pick("hatchet");
superMove(2);
turnRight();
superMove(4);
turnLeft();
drop("hatchet");

*/

reset();


function turnAround()
{
    turnRight();
    turnRight();
}


function superMove (times = 1)
{
    for (var i = 0; i < times; i = i+1){
        move(); 
    }
}


superMove();
pick("hatchet");
turnRight();
superMove(4);
turnLeft();
superMove(2);
drop("hatchet")