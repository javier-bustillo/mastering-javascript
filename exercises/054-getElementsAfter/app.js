const getElementsAfter = (array, n) => {
    const newArr = array.slice(n + 1);
    return newArr;

}
let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2);
console.log(output);