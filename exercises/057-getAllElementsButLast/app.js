const getAllElementsButLast = array => {
    const newArr = array.slice(0, -1);
    return newArr;

}
let input = [1, 2, 3, 4];
let output = getAllElementsButLast(input);
console.log(output);