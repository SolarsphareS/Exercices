const tableau = [1, 2, 3, 1, 2, 3, 4];
const tabcomp = [];
let check = 0;

function repetiteur(tab, a, b)
{
    for (let i = a; i <= b; i++)
    {
        tabcomp.push(tab[i]);
    }

    console.log(tabcomp);

    let compteur = 0;

    for (let i = 0; i < tab.length; i++)
    {
        if (tab[i] == tabcomp[compteur])
        {
            compteur += 1;
            if (compteur == tabcomp.length)
            {
                check += 1;
                compteur = 0;
            }
        }
        else
        {
            compteur = 0;
        }
    }
}

alert(`Voici le tableau à analyser: [${tableau}]`);

var indexA = +prompt("Indiquez l'index du début de la série à repérer:");
var indexB = +prompt("Indiquez l'index de la fin de la série à repérer:");

repetiteur(tableau, indexA, indexB);

alert(`La suite [${tabcomp}] est présente ${check} fois.`);