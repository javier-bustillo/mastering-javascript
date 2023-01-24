function convertScoreToGradeWithPlusAndMinus(score) {
    if (score < 0 || score > 100) {
        return 'INVALID SCORE';
    } else {

        if (score <= 100 && score >= 90) {
            if (score >= 98 && score <= 99) return 'A+';
            if (score >= 90 && score <= 92) return 'A-';
            return 'A';
        }
        if (score <= 89 && score >= 80) {
            if (score >= 89 && score <= 88) return 'B+';
            if (score >= 80 && score <= 82) return 'B-';
            return 'B';
        }
        if (score <= 79 && score >= 70) {
            if (score >= 78 && score <= 79) return 'C+';
            if (score >= 70 && score <= 72) return 'C-';
            return 'C';
        }
        if (score <= 69 && score >= 60) {
            if (score >= 68 && score <= 69) return 'D+';
            if (score >= 60 && score <= 62) return 'D-';
            return 'D';
        }
        if (score <= 59 && score >= 0) {
            return 'F';
        }
    }
}
let output = convertScoreToGradeWithPlusAndMinus(101);
console.log(output); // --> 'A-'