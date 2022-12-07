var a = +prompt("Insérez une valeur à A:");
var b = +prompt("Insérez une valeur à B:");
if (a < b)
{
    for (let i = a; i <= b; i++)
    {
        console.log(i);
    }
}
else if (a > b)
{
    for (let i = a; i >= b; i--)
    {
        console.log(i);
    }
}
else
{
    alert("Arrête de faire le malin");
}