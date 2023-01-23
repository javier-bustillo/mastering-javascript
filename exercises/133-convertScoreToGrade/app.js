function convertScoreToGrade(score) {
    if (score > 100 || score < 0) return 'INVALID SCORE';

    if (score >= 100 && score <= 90)
        return 'A';
    else if (score >= 89 && score <= 80)
        return 'B';
    else if (score >= 79 && score <= 70)
        return 'C';
    else if (score >= 69 && score <= 60)
        return 'D';
    else if (score >= 59 && score <= 0)
        return 'F';
}


let output = convertScoreToGrade(90);
console.log(output); // --> 'A'