/*
function leap(year) {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
*/

var leap = {
    year: [1989, 1996, 2010, 2019, 2020],
    calcYear: function() {
        this.leapYear = [];
        this.finalValues = [];

        for (var i = 0; i < this.leapYear.length; i++) {
            var years = this.year[i];

            if ((year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)) {
                console.log('This year is a leap year');
            } else {
                console.log('This year is not a leap year');
            }
        }
    }

};

leap.calcYear();
console.log(leap);

/*
var announcment = {
    if (leap(year) = true) {
        console.log('This year is a leap year');
    } else {
        console.log('This year is not a leap year');
    }
};
*/

/*
console.log(leap(2019));
console.log(leap(2016));
console.log(leap(2000));
console.log(leap(1989));
*/