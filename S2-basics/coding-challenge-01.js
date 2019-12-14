// Coding Challenge 01

/*
Mark and John are trying to commpate their BMI, which is calculated usinng the formula:
BMI = mass / heigh^2 = mass / (heigh * height)

1. Store Mark and John's mass and height in a variable
2. Calculate both BMIs
3. Create boolean variable containning info about wether Mark has higher BMI than John.
4. Print a string to the console containing the variable from step 3.
*/

var markMass, markHeight, johnMass, johnHeight;
markMass = 98;
markHeight = 190;
johnMass = 88;
johnHeight = 178;

var markBmi = markMass / (markHeight * markHeight);
var johnBmi = johnMass / (johnHeight * johnHeight);

var mark = markBmi >= johnBmi;
var john = markBmi <= johnBmi;

console.log("John's BMI is higher than Marks?", john);
console.log("Mark's BMI is higher than Johns?", mark);
