var today = new Date();

    // Get the time and store it in a variable.
    var day = today.getDay();

    // Array of the days of the week.
    var daylist = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // Log the current day to the console.
    console.log("Today is : " + daylist[day]);

    // Get the current time, minutes etc and store in a variable.
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
    var prepand = (hour >= 12)? " PM ":" AM ";

    // 
    hour = (hour >= 12)? hour - 12: hour;

    if (hour === 0 && prepand === ' PM ') {
        if (minute === 0 && second === 0) {
            hour = 12;
            prepand = ' Noon';
        } else {
            hour = 12;
            prepand = ' PM';
        }
    }
    
    if (hour === 0 && prepand === ' AM ') {
        if (minute === 0 && second === 0) {
            hour = 12;
            prepand = ' Midnight';
        } else {
            hour = 12;
            prepand = ' AM';
        }
    }

// Log second part to the console.
console.log("Current Time : " + hour + prepand + " : " + minute + " : " + second);