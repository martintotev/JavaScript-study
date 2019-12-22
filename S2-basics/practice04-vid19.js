// practice

//Star Wars vs Harry Potter

var movieScore, audienceScore, movieAverage, audienceAverage, scoreDifference;

var movieName = 'Star Wars';

movieScore = 53 + 65 + 80 + 93 + 94 + 82;
movieAverage = movieScore / 6;

audienceScore = 59 + 56 + 66 + 96 + 97 + 94;
audienceAverage = audienceScore / 6;
scoreDifference = movieAverage - audienceAverage;
console.log(movieAverage, audienceAverage);
console.log('The difference in scores is ' + scoreDifference + ' points.');

if (movieAverage > audienceAverage) {
    console.log('The critics\' reviews of ' + movieName + ' are better than what the audience thinks. ' + movieAverage + ' vs ' + audienceAverage);
} else if (audienceAverage > movieAverage) {
    console.log('The audience\'s reviews of ' + movieName + '  are better than what the critics think. ' + audienceAverage + '% vs ' + movieAverage + '%');
} else {
    console.log('The audience and the critics are on the same note about ' + movieName);
}