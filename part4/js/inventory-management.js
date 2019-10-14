/*eslint-env browser*/

var inventory = [[4824, "Shirt", 10, 15.99], [6343, "Jeans", 22, 39.99], [3223, "Socks", 36, 9.99], [2233, "Hat", 12, 14.99], [9382, "Jacket", 5, 49.99]];


function display_menu() {
    "use strict";
    window.console.log("\nWelcome to the Inventory Managemet Application\n");
    window.console.log("COMMAND MENU");
    window.console.log("view - View all products");
    window.console.log("update - Updates the existing product's inventory");
    window.console.log("exit - Exit the program\n");
}

function sorting(elem1, elem2) {
    "use strict";
    if (elem1[0] === elem2[0]) {
        return 0;
    }
    else {
        if (elem1[0] < elem2[0]){
            return -1
        } else {
            return 1
        }
    }
}

function display(inventory) {
    "use strict";
    inventory.sort(sorting);
    var i;
    window.console.log("\n")
    for (i = 0; i < inventory.length; i += 1) {
        window.console.log(inventory[i][0] + " " + inventory[i][1] + " (" + inventory[i][2] + ") $" 
                                    + inventory[i][3]);
    }
    window.console.log("\n");
}

function update(inventory) {
    "use strict";
    var skuNumber = window.prompt("Enter a sku number!");
    var stock = window.prompt("Enter a stock quantity!");
    var i;
    for (i = 0; i < inventory.length; i += 1) {
        if (inventory[i][0] == skuNumber) {
            inventory[i][2] = stock;
            break;
        }
    }
}

function main() {
    "use strict";
    display_menu();

    while (true) {
        var command = window.prompt("Enter Command! view, update or exit");
        if (command === "view") {
            display(inventory);
        } else if (command === "update") {
            update(inventory);
            display(inventory);
        } else if (command === "exit") {
            break;
        } else {
            window.alert("Invalid command entered! Enter a valid input!");
        }
    }
}

main();