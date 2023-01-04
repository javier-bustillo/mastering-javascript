const isSameLength = (word1, word2) => {
    let word1Length = word1.length;
    let word2Length = word2.length;

    if (word1Length === word2Length) return true;
    else return false;
}
let output = isSameLength('He', 'lo');
console.log(output);