// The Ternary Operator

var firstName = 'Niki';
var age = 16;

age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice');

//simpler version
var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

//basic version
if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}
console.log(drink);

//the code above do the same thing


//Switch statement instead of if - else statement
var job = 'teacher';
switch (job) {
    case 'teacher':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives a Tada in Seoul.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.')
        break;
    default:
        console.log(firstName + ' does something else.');
}

/*
var firstName = 'John';
var age = 21;

if (age < 13) {
    console.log(firstName + ' is a boy');
} else if (age >= 13 && age < 18) {
    console.log(firstName + ' is a teenager.');
} else if (age >= 18 && age < 30) {
    console.log(firstName + ' is a young adult.');
} else {
    console.log(firstName + ' is an adult.');
}
*/

switch(true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 18:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 18 && age < 30:
        console.log(firstName + ' is a young adult.');
        break;
    default:
        console.log(firstName + ' is an adult.');
}
