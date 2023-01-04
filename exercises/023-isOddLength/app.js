const isOddLength = word => {
    let wordLength = word.length;

    if (wordLength % 2 !== 0) return true;
    else return false;

}
let output = isOddLength('specimen');
console.log(output);