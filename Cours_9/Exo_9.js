const tableau = [1, 2, 3, 4, 5];

function addition(tab)
{
    let somme = 0;
    for (let i = 0; i < tab.length; i++)
    {
        somme += tab[i];
    }
    alert(`somme du tableau [${tab}] = ${somme}`);
}

alert(`[${tableau}]`);

addition(tableau);