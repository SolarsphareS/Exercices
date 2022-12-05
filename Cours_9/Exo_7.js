function addition(a, b)
{
    alert(`addition de ${a} et ${b}: ` + (a + b));
}

function soustraction(a, b)
{
    alert(`soustraction de ${a} et ${b}: ` + (a - b));
}

function division(a, b)
{
    alert(`division de ${a} et ${b}: ` + (a / b));
}

function multiplication(a, b)
{
    alert(`multiplication de ${a} et ${b}: ` + (a * b));
}

var a = +prompt("Indiquez une valeur à A");
var b = +prompt("Indiquez une valeur à B");
var operation = prompt("Quelle opération souhaitez-vous effectuer ?");

switch (operation.toLowerCase())
{
    case "+":
    case "addition":
        addition(a, b);
        break;
    case "-":
    case "soustraction":
        soustraction(a, b);
        break;
    case "/":
    case "division":
        division(a, b);
        break;
    case "*":
    case "multiplication":
        multiplication(a, b);
}