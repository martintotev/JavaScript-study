// Loops and Iteration

// for loop
for (var i = 0; i < 10; i++) {
    console.log(i);
}

for (var u = 0; u <=20; u += 2) {
    console.log(u);
}

var john = ['John', 'Smith', 1990, 'designer', false];
for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

// while loop
var i = 0;
while(i < john.length) {
    console.log(john[i]);
    i++;
}

// Continue & Break statements
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}