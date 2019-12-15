// if / else statements
/*
if (boolean) {
    1st statement
} else {
    2nd statement
}
*/

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' is not married!');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' is not married!');
}



// Code from the code challenge

var markMass, markHeight, johnMass, johnHeight;
markMass = 98; // in kg
markHeight = 1.90; // in meters
johnMass = 88; // in kg
johnHeight = 1.78; // in meter

var markBmi = markMass / (markHeight * markHeight);
var johnBmi = johnMass / (johnHeight * johnHeight);

console.log(markBmi, johnBmi);

var mark = markBmi >= johnBmi;
var john = markBmi <= johnBmi;

console.log('Is John\'s BMI higher than Marks?', john);
console.log('Is Mark\'s BMI higher than Johns?', mark);

if (markBmi > johnBmi) {
    console.log('Mark\'s BMI is higher than John\'s.');
} else {
    console.log('Mark\s BMI is lower than John\s');
}