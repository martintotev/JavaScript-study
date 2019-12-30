var john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,
    calcBmi: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

var mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,
    calcBmi: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

john.calcBmi();
mark.calcBmi();
console.log(john, mark);

if (john.bmi > mark.bmi) {
    console.log(john.firstName + ' ' + john.lastName + ' has a higher BMI of ' + john.bmi);
} else if (mark.bmi > john.bmi) {
    console.log(mark.firstName + ' '  + mark.lastName + ' has a higher BMI of ' + mark.bmi);
} else {
    console.log('They have the same BMI.');
}