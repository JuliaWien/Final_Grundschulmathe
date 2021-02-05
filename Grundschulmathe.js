alert("Grundschulmathe");

var testsCount = 0;
var levelCount = 0;

//Ermitteln der Zufallszahl
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rechenaufgabe() {
    let correctCount = 0;
    for (let i = 1; i <= 5; i++) 
    {
        switch (levelCount) {
            case 0:
                rechenzeichen = "+";

                var number1 = rand(1, 20);
                var number2 = rand(1, 20);
                var result = number1 + number2;
                break;
        }
        var feed = prompt("Wie viel ist " + number1 + rechenzeichen + number2);

        if (result == feed) {
            correctCount++;
            alert("Richtig! (" + correctCount + "/5) ");
        }
        else {
            alert("Nicht richtig! (" + correctCount + "/5)");
        }
    }
}
