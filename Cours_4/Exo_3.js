var age = prompt("Indiquez votre âge");
if (age < 18)
{
    alert("Vous êtes trop jeune!");
}
else
{
    if (age > 60) 
    {
        alert("Le calcul de l'index IMC n'est pas adapté à votre âge");
    }
    var poids = prompt("Indiquez votre poids en kg");
    var taille = prompt("Indiquez votre taille en m");
    var imc = (poids / (taille ** 2));
    alert("Votre IMC est le suivant: " + imc);
}
if (imc < 18.5)
{
    alert("Votre poids est insuffisant");
}
else if (imc < 24.9)
{
    alert("Votre poids est normal");
}
else if (imc < 29.9)
{
    alert("Vous êtes en surpoids");
}
else if (imc < 39.9)
{
    alert("Vous êtes en obésité");
}
else
{
    alert("Vous êtes en obésité morbide!");
}