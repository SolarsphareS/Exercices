function tirage(a)
{
    reste -= a;
    if (reste > 0)
    {
        choix = +prompt(`au tour du joueur suivant, reste ${reste} bâtonnets`);
    }
    else
    {
        alert(`Bien ouej !`);
    }
}

var reste = 20;
choix = +prompt("Au tour du premier joueur: Il y a 20 bâtonnets, choisissez 1, 2 ou 3 bâtonnets à retirer:");
tirage(choix);
while (reste > 0)
{
    tirage(choix);
}