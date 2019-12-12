var yearNow = 2019;
var myBirthDay = 1989;
var legalAge = 18;

var myAge = myBirthDay - yearNow;
var adult = yearNow - myBirthDay >= legalAge;
console.log(myAge, adult);

var gradYear = myBirthDay + legalAge + 4;
gradYear++;
console.log(gradYear);