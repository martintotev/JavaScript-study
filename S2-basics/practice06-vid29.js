// Coding Practie 06

/*
Create a more advanced tip calculator from the previous challenge
John and family went to 5 different restaurants.
The bills were $124, $48, $268, $180, $42.
John likes to tip
20% when < $50
15% when $50 ~ $200
10% when > $200

1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculation
4. As an output, create
    1) A new array containing all tips
    2) An array containing final paid amounts (bill + tip)
    HINT: Start with two empty arrays [] as properties and then fill them up in the loop

EXTRA:
Mark's family went to 4 different restaurants
The bills were $77, $375, $110, $45.
Mark likes to tip
20% when < $100
10% when $100 ~ $300
25% when > $300

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a funtion (not a method) to calculate the average of a given array of tips.
HINT: Loop over the array, and in each iteration store the current sum of array,
divide it by the number of elemts in it (that's how you calculate the average).
7. Calcualte the average tip for each family.
8. Log to the console which family paid the highest tips on average.
*/

var john = {
    firstName: 'John',
    lastName: 'Smith',
    fullName: function() {
        this.fullName = this.firstName + ' ' + this.lastName;
        return this.fullName;
    },
    bills: [124, 48, 268, 180, 42],
    calcTip: function() {
        this.tips = [];
        this.totalPrice = [];

        for (var i = 0; i < this.bills.length; i++) {
            var percent;
            var bill = this.bills[i];

            if (bill < 50) {
                percent = 0.2;
            } else if (bill >= 50 && bill < 200) {
                percent = 0.15;
            } else {
                percent = 0.1;
            }

            this.tips[i] = bill * percent;
            this.totalPrice[i] = bill + bill * percent;
        }
    }
    
};

john.fullName();
john.calcTip();
console.log(john);