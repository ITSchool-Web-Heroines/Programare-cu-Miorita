// https://miorita.scoalaweb.ro/playgrounds/escape
// Scrie un program care să o ajute pe Miorița să ajungă la pășune
function turnAround() 
{
    turnRight()
    turnRight()
        turnRight()
}
function superMove(times = 1)
{
    for(var i = 0; i < times; i = i+1) 
    {
        move();
    }
}
turnAround() 
superMove(3);
turnLeft();
superMove();
turnLeft();
superMove(6);
turnLeft();
superMove(2);
turnLeft();
superMove(6);
turnLeft();
superMove(1);
turnLeft();
superMove(3);
