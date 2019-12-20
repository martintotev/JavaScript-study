var greeting, me, currentYear, yearBorn, startSchool, meGraduationSchool, meGraduationUni;

greeting = 'Hello, my name is ';
me = 'Martin';
currentYear = 2019;
yearBorn = 1989;
startSchool = yearBorn + 7;
schoolGraduation = startSchool + 12;

var currentAge = currentYear - yearBorn;

var iAm = greeting + me + ' and I am ' + currentAge + ' years old. ';
var school = 'I started school in ' + startSchool + ' and I graduated in ' + schoolGraduation + '.';
console.log(iAm + school);
console.log(typeof greeting);