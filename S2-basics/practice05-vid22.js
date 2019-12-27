// Arrays practices

var data = ['John', 1988, 'married', 'designer'];
data.push('cats');
console.log(data);

var johnIs = data.indexOf('married') === -1 ? 'John is not married' : 'John is married';
console.log(johnIs);

var johnLikes = 'John is a ' + data[4] + ' person';
console.log(johnLikes);