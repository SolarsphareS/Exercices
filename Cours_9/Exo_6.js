function addition(a, b)
{
    return (a + b);
}

function soustraction(a, b)
{
    return (a - b);
}

function division(a, b)
{
    return (a / b);
}

function multiplication(a, b)
{
    return (a * b);
}

var a = +prompt("Indiquez une valeur à A");
var b = +prompt("Indiquez une valeur à B");

console.log(`addition de ${a} et ${b}: ` + addition(a, b));
console.log(`soustraction de ${a} et ${b}: ` + soustraction(a, b));
console.log(`division de ${a} et ${b}: ` + division(a, b));
console.log(`multiplication de ${a} et ${b}: ` + multiplication(a, b));