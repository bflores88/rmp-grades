//Create a Revealing Module Pattern that will have the following data and methods:

//data
//scores 65, 76, 100, 88, 17, 55

//methods
// 1. finds the sum of all scores
// 2. finds the avg of all scores
// 3. finds the highest score
// 4. finds the lowest score
// 5. generates a random score
// 6. finds the number of passing scores above 70
// 7. finds the first score in the list 
// 8. finds the last score in the list 
// 9. generates a new score list with a 5% increase for each score 
// 10.generates a list of scores that are odd numbered

var allScores = (function(){
    var scores = [65, 76, 100, 88, 17, 55];

    var sumScores = 0;
    var avgScores = 0;

    var sum = function(){
        for(var i=0; i<scores.length; i++){
            sumScores+= scores[i];
        }
        return sumScores;
    }

    var avg = function(){
        avgScores = sumScores / scores.length;
        return avgScores;
    }

    var highest = function(){
        var highestScore = Math.max(...scores);
        return highestScore;
    }

    var lowest = function(){
        var lowestScore = Math.min(...scores);
        return lowestScore;
    }

    var random = function(){
        var randomScore = scores[Math.floor(Math.random()*scores.length)];
        return randomScore;
    }

    var over70 = function(){
        var above70 = [];
        scores.forEach(function(elem){
            if(elem>70){
                above70.push(elem);
            }
        })
        return above70;

    }

    var first = function(){
        var firstScore = scores[0];
        return firstScore;
    }

    var last = function(){
        var lastScore = scores[scores.length - 1];
        return lastScore;
    }

    var increaseBy5 = function(){
        var newScores = [];
        for(var i=0; i<scores.length; i++){
            var increase = scores[i] * 1.05;
            newScores.push(increase);
        }
        return newScores;
    }

    var odd = function(){
        var oddScores = [];
        for(var i=0; i<scores.length; i++){
            if(scores[i]%2 === 1){
                oddScores.push(scores[i]);
            }
        }
        return oddScores;
    }

    return {
        sum: sum,
        average: avg,
        highest: highest,
        lowest: lowest,
        random: random,
        over70: over70,
        first: first,
        last: last,
        increase: increaseBy5,
        odd: odd
    }



}())


console.log('Sum: ' + allScores.sum());
console.log('Average: ' + allScores.average());
console.log('Highest: ' + allScores.highest());
console.log('Lowest: ' + allScores.lowest());
console.log('Random: ' + allScores.random());
console.log('Over 70: ' + allScores.over70());
console.log('First: ' + allScores.first());
console.log('Last: ' + allScores.last());
console.log('Increase by 5%: ' + allScores.increase());
console.log('Odd Number Scores: ' + allScores.odd());
