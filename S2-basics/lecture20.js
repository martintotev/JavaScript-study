// Functions

// When you want to reuse a code you will need later.
function calculateAge(birthYear) {
    return 2018 - birthYear;
}

// var to store the result > call the function(argument here)
var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn);

/*
DRY principle is an essential coding principle
DON'T REPEAT YOURSELF
*/

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.');
    }
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1949, 'Mike');
yearsUntilRetirement(1969, 'Jane');