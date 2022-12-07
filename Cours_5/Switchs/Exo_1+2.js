var transport = prompt("Quel est votre moyen de transport principal ?");
switch (transport.toLowerCase())
{
    case "velo":
    case "moto":
        console.log("Vous roulez à " + transport + ", ce qui a 2 roues");
        break;
    case "bus":
        console.log("Vous prenez le " + transport + ", ce qui a 4 roues");
        break;
    case "voiture":
        console.log("Vous prenez la " + transport + ", ce qui a 4 roues");
        break;
    case "avion":
        console.log("Vous prenez l " + transport + ", ce qui a beaucoup de roues");
        break;
    case "quad":
        console.log("Vous prenez le " + transport + ", ce qui a 4 roues");
        break;
    default:
        console.log("Ce n'est pas un transport valide!");
}