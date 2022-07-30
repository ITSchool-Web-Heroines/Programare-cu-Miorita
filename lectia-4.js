reset();

function turnAround()
{
    turnRight();
    turnRight();
}


function superMove(times = 1)
{
    for (var i = 0; i < times; i = i+1){
        move();
    }
}


turnAround();
superMove(5);
turnRight();
move();
turnRight();
superMove(4);
pick("hatchet");
turnAround();
superMove(4);
turnLeft();
superMove();
turnLeft();
superMove(5);
drop("hatchet");
