// Function statements and expressions

//Function declaration:
// function whatDoYouDo(job, firstName) {}

// Function expression:
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in London.';
        case 'designer':
            return firstName + ' designs beautiful websites.';
        default:
            return firstName + ' does something else.';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jenny'));
console.log(whatDoYouDo('retired', 'Jake'));

/*
Expression is something that produces immediate result, no matter how long the code is as long it produces a single value!
Statement is something that does not produce immediate result, like an if else etc.!

*/