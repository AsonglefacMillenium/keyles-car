/* Using function declaration */
function checkDriverAge() {
    var age = prompt("Enter your age ");

    if (Number(age) === 18) {
        alert("Congratulations! Enjoy your first year of riding");
    } else if (Number(age) > 18) {
        alert("Enjoy your rides as you drive");

    } else {
        alert("Error! You are too young to drive. Power off")
    }
}

checkDriverAge();


/*Using function Expresion*/

var checkDriverAge2 = function() {
    var age = prompt("Enter your age ");

    if (Number(age) === 18) {
        alert("Congratulations! Enjoy your first year of riding");
    } else if (Number(age) > 18) {
        alert("Enjoy your rides as you drive");

    } else {
        alert("Error! You are too young to drive. Power off")
    }
}


checkDriverAge2();