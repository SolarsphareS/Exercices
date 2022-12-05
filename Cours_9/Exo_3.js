const tableau = [1, 2, 3, 4, 5];

function renverseur(a)
{
    for (let i = 0; i < a.length / 2; i++)
    {
        let copieur = a[i];
        a[i] = a[a.length - 1 - i];
        a[a.length - 1 - i] = copieur;
    }
    console.log(a);
}

console.log(tableau);

renverseur(tableau);