// Coding Challenge 04

/*
Compare John and Marks BMI s, but this time in a object.
1. For each of them, create an object with properties
for their full name, mass & height.
2. Then, add a method to each object to calculate the BMI.
Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI,
together with the full name and their respective BMI.
Don't forget they might have the same BMI.

BMI = mass / height^2 = mass / (height * height).
mass in kg, height in meters.
*/

var john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 98,
    height: 1.90,
    calcBmi: function() {
        this.mass / (this.height * this.height);
    }
};
var johnBmi = john.calcBmi();

var mark = {
    firstName: 'Mark',
    lastName: 'Walberg',
    mass: 88,
    height: 2.05,
    calcBmi: function() {
        this.mass / (this.height * this.height);
    }
};
var markBmi = mark.calcBmi();


function compareBmi(johnBmi, markBmi) {
    if (johnBmi > markBmi) {
        return('Is John\'s BMI higher than Marks?', johnBmi);
    } else if (markBmi > johnBmi) {
        return('Is Mark\'s BMI higher than Johns?', markBmi);
    } else {
        return('John and Mark have the same BMI', johnBmi, markBmi);
    }
}

console(compareBmi());