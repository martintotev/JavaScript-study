// Coding Challenge 02

/*
John and Mike play basketball in different teams.
In the latest 3 games, John's team scored 89, 120 and 103.
In the latest 3 games, Mike's team scored 116, 94 and 123.

1. Calculate the average score for each team.
2. Decide which team wins in average (highest average score),
and print the winner to the console with the average score.
3. Then change the score to show different winners.
Don't forget to take into account there might be a draw.

4. Extra: Mary also plays basketball,
and her team score 97, 134 and 105.
Log the average winner to the console.
HINT: Will need the && operator to take the decision.

5. Like before, change the scores to generate different winners,
keeping in mind there might be draws.
*/
var nameJohn, nameMike, nameMary;
var john, mike, mary;
var johnAverage, mikeAverage, maryAverage;

nameJohn = 'John';
nameMike = 'Mike';
nameMary = 'Mary';

john = 89 + 120 + 103;
mike = 116 + 94 + 123;
mary = 97 + 134 + 105;
console.log(john, mike, mary);

johnAverage = john / 3;
mikeAverage = mike / 3;
maryAverage = mary / 3;
console.log(johnAverage, mikeAverage, maryAverage);

if (johnAverage > mikeAverage) {
    console.log(nameJohn + ' has the highest average score.');
} else if (mikeAverage > maryAverage) {
    console.log(nameMike + ' has the highest average score.');
} else if (maryAverage > johnAverage) {
    console.log(nameMary + ' has the highest averaga score.');
} else if (maryAverage > mikeAverage){
    console.log(nameMary + ' has the highest average score.');
} else {
    console.log('It\'s a draw!');
}
