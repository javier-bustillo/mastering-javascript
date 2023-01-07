const getAllLetters = str => {
    const newArr = [];
    for (x of str) {
        newArr.push(x);
    }
    return newArr;

}
let output = getAllLetters('Radagast');
console.log(output);