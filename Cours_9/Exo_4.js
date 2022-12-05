function repetiteur(a, b)
{
    let compteur = 0;
    for (let i = 0; i < a.length; i++)
    {
        if (a[i] == b)
        {
            compteur += 1;
        }
    }
    return alert(`Nombre d'apparitions de ${b} dans le tableau: [${a}] = ` + compteur);
}

const tableau = [1, 2, 3, 4, 5];

var nombre = +prompt("Indiquez un nombre entier à retrouver dans un tableau:");

repetiteur(tableau, nombre);