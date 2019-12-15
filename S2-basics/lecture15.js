// Boolean logic

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



if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age < 16) {
    console.log(firstName + ' is a teenager.');
} else {
    console.log(firstName + ' is an adult.');
} 
