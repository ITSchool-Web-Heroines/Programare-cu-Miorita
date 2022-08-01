// https://miorita.scoalaweb.ro/playgrounds/escape
// Scrie un program care să o ajute pe Miorița să ajungă la pășune
move();
turnLeft();
function superMove(times = 1)
{
    for(var i = 0; i < times; i = i+1) 
    {
        move();
    }
}
superMove(3);
turnLeft();
superMove(2);
turnLeft();
superMove(6);
turnLeft();
superMove(2);
turnLeft();
superMove(3);
turnLeft();
superMove();