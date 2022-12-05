const tableau1 = [1, 2, 3];
const tableau2 = [1, 2, 1, 2, 3];
const similitude = [];
const similitudeMax = [];
var tableau1Index = [];
var tableau1IndexMax = [];
var checkpoint = -1;

console.log(tableau1);
console.log(tableau2);

for (let i = 0; i < tableau1.length; i++)
{
    for (let j = (checkpoint + 1); j < tableau2.length; j++)
    {
        if (tableau1[i] == tableau2[j])
        {
            console.log(tableau1[i] + " == " + tableau2[j]);

            tableau1Index.push(i);
            console.log("tableau1index : [" + tableau1Index + "]");
            console.log("tableau1indexMax : [" + tableau1IndexMax + "]");

            similitude.push(tableau1[i]);
            console.log("similitude = [" + similitude + "]");

            checkpoint = j;
            console.log("checkpoint = " + checkpoint);

            j = tableau2.length;
        }
        else
        {
            if (similitude.length > tableau1IndexMax.length)
            {
                console.log("true");
                tableau1IndexMax.splice(0, tableau1IndexMax.length);
                tableau1IndexMax.push(tableau1Index);
                tableau1Index.splice(0, tableau1Index.length);
                similitudeMax.splice(0, similitudeMax.length, similitude);
            }

            console.log(" :( " + tableau1[i] + " !== " + tableau2[j]);
        }
    }
}
console.log("tableau1IndexMax = " + tableau1IndexMax);
var indexA = tableau1IndexMax[0];
console.log("indexA = tableau1IndexMax[0] = " + tableau1IndexMax[0]);
var indexB = tableau1IndexMax[tableau1IndexMax.length - 1];
console.log("indexB = tableau1IndexMax[tableau1IndexMax.length - 1] = " + tableau1IndexMax[tableau1IndexMax.length - 1]);

console.log("la chaîne la plus longue: " + similitudeMax + " . A savoir les index " + indexA + " à " + indexB);