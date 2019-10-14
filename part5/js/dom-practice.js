/*eslint-env browser*/

//STEP 1
function display_message() {
    "use strict";
    window.alert("I have been clicked");
}

//STEP 2
var myElement = window.document.getElementById("myButton2");
myElement.onclick = function () {
    "use strict";
    window.alert("I have been clicked");
};

//STEP 3
var myButton3 = window.document.getElementById("myButton3");
myButton3.addEventListener("click", display_message, false);
function display_message() {
    "use strict";
    window.alert("I have been clicked");
}

//STEP 4
var myButton4 = window.document.getElementById("myButton4");
myButton4.addEventListener("click", function () {
    "use strict";
    window.alert("I have been clicked");
}, false);

//STEP 5
function init() {
    "use strict";
    var myButton5 = window.document.getElementById("myButton5");
    myButton5.addEventListener("click", function () {
        window.alert("I have been clicked");
    });
}

window.addEventListener("load", init);