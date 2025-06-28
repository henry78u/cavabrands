
// recording the variables
let score1 = 11;
let score2 = 15;
let score3 = 8;
let totalScore = (score1, score2, score3);

// stating the function
function findHighestScore(score1, score2, score3) {
 if (score1 >= score2 && score1 >= score3){
    return score1;
}
else if (score2 >= score1 && score2 >= score3){
    return score2; 
}
else {
    return score3;
} 
}

let score = findHighestScore(score1, score2, score3);


// the result displayed below 
console.log("the highest score is " +score);

