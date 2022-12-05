function verificateur(a)
{
    if (a % 2 == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

var number = prompt("Indiquez un nombre entier");
alert(`${number} est-il un nombre pair ? \n ${verificateur(number)}`);