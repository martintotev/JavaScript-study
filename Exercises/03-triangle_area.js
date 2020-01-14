var a = 2;
var b = 12;
var c = 13;

var base = (a + b + c)/2;
var area = Math.sqrt(base * ((base - a) * (base - b) * (base - c)));

console.log(area);