const tableau = [1, 2, 5, 9, 2, 8, 5, 2];
console.log(tableau);
for (let i = 0; i < tableau.length; i++)
{
    let comparateur = tableau[i];
    for (let j = (i + 1); j < tableau.length; j++)
    {
        if (comparateur == tableau[j])
        {
            tableau[i] = "Modifié";
            tableau[j] = "Modifié";
        }
    }
}
console.log(tableau);