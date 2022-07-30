if (canMove())
{
    move();
    move(); 
    move();
}

reset();

if (!canmove())
{
    turnLeft();
    move();
    turnRight();
    move();
    move();
    move();
}