// Arrays

// How to create an array
var names = ['John', 'Mark', 'Jane'];

//another way of making arrays
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
console.log(names.length);
// ARRAY ELEMENTS START FROM 0!!! The first element is 0 and not 1!!!

/* Reassign a value to an array
array [number of value to be reassigned] = new value
*/ 
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1989, 'teacher', false];

// Push method - adds an element to the end of the array.
john.push('blue');

// Puts a new element in the beginning of the array.
john.unshift('Mr.');
console.log(john);

// Removes the last element.
john.pop();
console.log(john);

// Index show which position the element is in the array.
console.log(john.indexOf(4));

// variable = array.indexOf('what we are looking for') if the result is -1(not in the array) then 'NOT' else 'IS';
var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);