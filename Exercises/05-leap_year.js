var leap = {
    year: [1989, 1996, 2010, 2019, 2020],
    calcYear: function() {
        var year;

        for (var i = 0; i < this.year.length; i++) {
            year = this.year[i];

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