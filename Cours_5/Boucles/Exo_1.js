for (let i = 1; i <= 100; i++)
{
    if (i % 5 == 0 && i % 7 == 0)
    {
        console.log("Coucou Hibou");
    }
    else if (i % 5 == 0)
    {
        console.log("Coucou");
    }
    else if (i % 7 == 0)
    {
        console.log("Hibou");
    }
    else
    {
        console.log(i);
    }
}