/* eslint - env browser*/

//STEP 1
function halfNumber(value) {
    "use strict";
    var answer = parseFloat(value / 2);
    window.console.log("Half of " + value + " is " + answer + ".")
    return answer;
}

//STEP 2
function squareNumber(value) {
    "use strict";
    var answer = parseFloat(value * value);
    window.console.log("Square of " + value + " is " + answer + ".")
    return answer;
}

//STEP 3
function percentOf(value1, value2) {
    "use strict";
    var answer = parseFloat(value1 / value2 * 100);
    window.console.log(value1 + " is " + answer + "% of " + value2 + ".")
    return answer;
}

//STEP 4
function findModulus(value1, value2) {
    "use strict";
    var answer = parseFloat(value1 % value2);
    window.console.log(answer + " is the modulus of " + value1 + " and " + value2 + ".")
    return answer;
}

//STEP 5
function sumAll() {
    var data = window.prompt("Enter the numbers you want to add (xx, xx)");
    data = data.split(',')
    
    
    var i;
    for (i = 0; i < data.length; i += 1) {
        data[i] = parseInt(data[i]);
    };
    window.console.log(data)
    var sum = function (previousValue, value) {
        "use strict";
        return previousValue + value;
    };
    var total = data.reduce(sum);
    window.alert("The total is " + total);
}