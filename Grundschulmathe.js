alert("Grundschulmathe");

//benötigte Variablen

var testsCount = 0;
var levelCount = 0;
var rechenzeichen;

//Ermitteln der Zufallszahl
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rechenaufgabe() {
    let correctCount = 0;
    for (let i = 1; i <= 5; i++) {
        switch (levelCount) {
            case 0:
                rechenzeichen = "+";

                var number1 = rand(1, 20);
                var number2 = rand(1, 20);
                var result = number1 + number2;
                break;

            case 1:
                rechenzeichen = "-"

                var number1 = rand(1, 20);
                var number2 = rand(1, number1);

                var result = number1 - number2;
                break;

            case 2:
                rechenzeichen = "*";

                var number1 = rand(1, 10);
                var number2 = rand(1, 10);
                var result = number1 * number2;
                break;

            case 3:
                rechenzeichen = "/";
                var number2 = rand(1, 10);
                var number1 = rand(1, 10) * number2;

                var result = number1 / number2;
                break;
        }
        var feed = prompt("Wie viel ist " + number1 + rechenzeichen + number2);

        if (result == feed) {
            correctCount++;
            alert("Richtig! (" + correctCount + "/5)");
        }
        else {
            alert("Nicht richtig! (" + correctCount + "/5)");
        }
    }

    if (correctCount >= 4) {
        levelCount++;
        alert("Well, done! You have passed level #" + levelCount);
    }
    else {
        alert("To reach the next level you need to try it again");
    }

    if (levelCount == 4) {
        levelCount = 0;
        document.getElementById("demo").innerHTML = "You've finished all levels";
    }
    else
        document.getElementById("demo").innerHTML =
            "You had " + correctCount + "/5 correct answers on this level";
}
