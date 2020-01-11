var today = new Date();
var day = today.getDate();

var month = today.getMonth() + 1;
var year = today.getFullYear();

if(day < 10) {
    day = '0' + day;
}

if(month < 10) {
    month = '0' + month;
}

today = day + '.' + month + '.' + year;
console.log('European way of showing the date is ' + today);

today = year + '/' + month + '/' + day;
console.log('Korean way of showing the date is ' + today);

today = month + '-' + day + '-' + year;
console.log('American way of showing the date is ' + today);