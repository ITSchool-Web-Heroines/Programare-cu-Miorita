if (canMove())
{
    move();
    move(); 
    move();
}

reset();

if (!canMove())
{
    turnLeft();
    move();
    turnRight();
    move();
    move();
    move();
}
