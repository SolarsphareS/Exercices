var objectif = +prompt("Insérez un nombre entier positif:");
var compteur = 0;
var tentative = 1;

while (compteur < objectif)
{
    let i = 2;
    while (i < tentative)
    {
        if (tentative % i == 0)
        {
            tentative++;
            i = 2;
        }
        else
        {
            i++;
        }
    }
    console.log(tentative);
    tentative++;
    compteur++;
}