alert("Grundschulmathe");

var min = 1;
var max = 20;

function rand(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function zufall() {
    var number1 = rand(1, 20);
    var number2 = rand(1, 20);
    var result = number1 + number2;

    var Ergebnis = prompt("Wie viel ist " + number1 + " + " + number2);

    if (Ergebnis != null) {
        document.getElementById("demo").innerHTML =
            "Your result was " + Ergebnis;
    }

    if (result == Ergebnis) {
        alert("true");
    }
    else {
        alert("false");
    }
}