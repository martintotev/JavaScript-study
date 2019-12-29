// Coding Challenge 03

/*
John and his family went on a holiday and went to 3 different restaurants.
The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function).
He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between %50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1. Containing all three tips (one for each bill).
2. Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
*/
var bills = [124, 48, 268];
console.log(bills);

var tipTotal = function(bill) {
    if (bill < 50) {
        return bill * 0.2;
    } else if (bill > 50 && bill < 200) {
        return bill * 0.15;
    } else {
        return bill * 0.1;
    }
};

var tip = [];
tip.push(tipTotal(bills[0]));
tip.push(tipTotal(bills[1]));
tip.push(tipTotal(bills[2]));
console.log(tip);

var total = [];
total.push(bills[0] + tipTotal(bills[0]));
total.push(bills[1] + tipTotal(bills[1]));
total.push(bills[2] + tipTotal(bills[2]));
console.log(total);

// console.log(bills[0], tipTotal(bills[0]), tipTotal(bills[0]) + bills[0]);
// console.log(bills[1], tipTotal(bills[1]), tipTotal(bills[1]) + bills[1]);
// console.log(bills[2], tipTotal(bills[2]), tipTotal(bills[2]) + bills[2]);