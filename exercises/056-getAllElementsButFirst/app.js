const getAllElementsButFirst = array => {
    const newArr = array.slice(1);
    return newArr;

}
let input = [1, 2, 3, 4];
let output = getAllElementsButFirst(input);
console.log(output);