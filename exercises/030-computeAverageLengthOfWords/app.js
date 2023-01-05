const computeAverageLengthOfWords = (word1, word2) => {
    let word1Length = word1.length;
    let word2Length = word2.length;
    let totalLength = word1Length + word2Length;

    return totalLength / 2;

}

let output = computeAverageLengthOfWords('code', 'programs');
console.log(output);