const tableau = [0, 1, 2, "chat", 4, "cheh", 6, 7, "chat", 2, 6, 0, 9];
let inputUser = prompt("Entrez l'élément du tableau à vérifier");
console.log(typeof (inputUser));
console.log(inputUser);

function recurence()
{
    let compteur = 0;
    for (let i = 0; i <= tableau.length; i++)
    {
        if (tableau[i] == inputUser)
        {
            compteur += 1;
        }
    }
    alert(`Votre entrée \"${inputUser}\" est présente ${compteur} fois dans le tableau !`);
}

recurence(inputUser);