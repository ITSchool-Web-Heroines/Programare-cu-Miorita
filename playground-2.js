
function superMove(times = 1)
{
    for(var i = 0; i < times; i = i+1) 
    {
        move();
    }
}
superMove() 
pick("hatchet")
turnRight()
superMove(4)
turnLeft()
superMove(3)
drop("hatchet")