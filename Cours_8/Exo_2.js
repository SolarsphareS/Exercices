const tableau = [0, 1, 2, "chat", 4, "cheh", 6, 7, "chat", 2, 6, 0, 9];
const indexPosition = [];
let inputUser = prompt("Entrez l'élément de l'index du tableau à vérifier");
console.log(typeof (inputUser));
console.log(inputUser);

function index()
{
    for (let i = 0; i <= tableau.length; i++)
    {
        if (tableau[i] == inputUser)
        {
            indexPosition.push(i);
        }
    }
    switch (indexPosition.length)
    {
        case 0:
            alert("Il n'y a aucun élément correspondant dans ce tableau !");
            break;
        case 1:
            alert(`Votre entrée \"${inputUser} est présente à l'index: ${indexPosition}`);
            break;
        default:
            alert(`Votre entrée \"${inputUser}\" est présente aux index: ${indexPosition}`);
    }
}
index(inputUser);