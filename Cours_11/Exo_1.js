const tableau = [5, 4, 3, 2];

console.log(tableau);

for (let i = 0; i < tableau.length; i++)
{
    let plusPetit = tableau[i];
    let indexPlusPetit = i;
    console.log("plusPetit (i) = " + plusPetit)

    for (let j = i; j < tableau.length; j++)
    {
        if (tableau[j] < plusPetit)
        {
            plusPetit = tableau[j];
            indexPlusPetit = j;
            console.log(" Nouveau plusPetit = " + plusPetit)
        }
    }

    console.log("Fin cycle J, plus petit = " + plusPetit);

    tableau.splice(indexPlusPetit, 1);
    tableau.splice(i, 0, plusPetit);

    console.log("tableau après moddif: " + tableau);
}

console.log(tableau);