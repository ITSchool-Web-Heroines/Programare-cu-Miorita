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


if (!canmove())
{
    turnAround();
    superMove();
    turnRight();
    superMove(2);
    turnLeft();
    superMove(3);
}