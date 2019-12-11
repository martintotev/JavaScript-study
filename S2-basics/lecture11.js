//Operator precedence

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

var x, y;
x = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
x = y = (3 + 5) * 4 - 6; // assignments are calculated from right to left
// result = y, result = x
console.log(x, y);

//More operators
x = x * 2;
x *= 2;
// same code, different way of writing it
x += 10;
x++; // same as x += 1; same as x = x + 1;

console.log(x);