reset();

let lista = [6, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 1, 1]

for (let culoar = 0; culoar < lista.length; culoar++)
{
    for(let i = 0; i < lista[culoar]; i++)
    {
        move();
    }
    turnRight();
}

turnLeft();