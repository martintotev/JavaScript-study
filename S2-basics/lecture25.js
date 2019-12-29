// Objects and properties

// An object is defined by {}

// Object literal syntax
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
};

// retrieve data from object with . notation
console.log(john.firstName); 

// retrieve data from object like with Arrays with [] notation
console.log(john['lastName']);

// retrieve data from object by defining it as a variable
var x = 'birthYear';
console.log(john[x]);

// Mutate(Change) data in an object

// with a . notation
john.job = 'designer';

// with a [] notation
john['isMarried'] = true;
console.log(john);


// new Object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);