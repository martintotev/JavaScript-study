// Objects and Methods

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2018 - this.birthYear;
    }
};
// console.log(john.calcAge());

// var age = john.calcAge();
// john.age = john.calcAge();
john.calcAge();
console.log(john);