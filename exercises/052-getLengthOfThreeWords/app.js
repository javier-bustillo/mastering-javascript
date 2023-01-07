const getLengthOfThreeWords = (word1, word2, word3) => {
    let result = word1.length + word2.length + word3.length;
    return result;
}
let output = getLengthOfThreeWords('some', 'other', 'words');
console.log(output);