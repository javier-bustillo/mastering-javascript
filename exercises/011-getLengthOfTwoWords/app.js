const getLengthOfTwoWords = (word1, word2) => {
    let word1Length = word1.length;
    let word2Length = word2.length;
    let sum = word1Length + word2Length;

    return sum;
}
let output = getLengthOfTwoWords('Hello', 'Ninjas');
console.log(output);