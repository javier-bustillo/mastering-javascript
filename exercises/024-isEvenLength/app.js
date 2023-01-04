const isEvenLength = word => {
    let wordLength = word.length;

    if (wordLength % 2 === 0) return true;
    else return false;
}
let output = isEvenLength('Root');
console.log(output);