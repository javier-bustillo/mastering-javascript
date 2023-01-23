function convertScoreToGrade(score) {
    if (score > 100 || score < 0) return 'INVALID SCORE';


}


let output = convertScoreToGrade(90);
console.log(output); // --> 'A'