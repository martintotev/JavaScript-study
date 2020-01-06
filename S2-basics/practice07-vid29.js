// Coding Practie 06

/*
Bills are 13000, 2200, 26700, 6500, 4600, 2500, 1200, 12800.
John likes to tip
20% when < 5000
15% when 5000 ~ 10000
10% when 10000 ~ 20000
5% when > 20000

1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculation
4. As an output, create
    1) A new array containing all tips
    2) An array containing final paid amounts (bill + tip)
    HINT: Start with two empty arrays [] as properties and then fill them up in the loop

5. Create a funtion (not a method) to calculate the average of a given array of tips.
HINT: Loop over the array, and in each iteration store the current sum of array,
divide it by the number of elemts in it (that's how you calculate the average).
6. Calcualte the average tip for each family.
7. Log to the console which family paid the highest tips on average.
*/

var user = {
    // Both names of the person as strings
    firstName: 'Bruce',
    lastName: 'Sontagg',

    // Function that combines the names and inserts a space between them. Has to ba called outside of the method.
    // john.fullname();
    fullName: function() {
        this.fullName = this.firstName + ' ' + this.lastName;
        return this.fullName;
    },

    // Bill denomantions in an array.
    bills: [13000, 2200, 26700, 6500, 4600, 2500, 1200, 12800],

    // Function that callculates the tips.
    calcTips: function() {

        // Empty arrays to be filled with the calucaltions from every bill.
        this.tips = [];
        this.total = [];

        // For loop introduces the percent variable and a bill variable that will pull from the bills array.
        for (var i = 0; i < this.bills.length; i++) {

            // bill var that call all the bills with this.bills[i]
            var bill = this.bills[i];

            // percent var to store the percentage.
            var percent;

            // if else to calculate the percentage.
            if (bill < 5000) {
                percent = 0.2;
            } else if (bill >= 5000 && bill < 10000) {
                percent = 0.15;
            } else if (bill >= 10000 && bill < 20000) {
                percent = 0.1;
            } else {
                percent = 0.05;
            }

            // Calculating the bill with the appropriate percentage.
            this.tips[i] = bill * percent;
            this.total[i] = bill + bill * percent;
        }
    },
};

// Function to calcualte the average tip, by inputing it = (tips)
function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

// Calling both functions.
user.fullName();
user.calcTips();

// Calling the Calculate Average function.
user.average = calcAverage(user.tips);

// Logging it into the console.
console.log(user, user.average);