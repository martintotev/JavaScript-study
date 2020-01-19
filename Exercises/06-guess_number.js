var num = Math.ceil(Math.random() * 10);
console.log(num);

var varNum = prompt('Guess the number between 1 and 10');
if (varNum == num) alert('It\'s a match');
else alert('Try again!');