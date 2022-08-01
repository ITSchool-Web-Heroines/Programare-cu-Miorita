reset();

let free;
free = canMove();

if (free)
{
move();
move();
move();
}

if (!free)
{
TurnLeft();
move();
TurnRight();
move();
move();
move();
}