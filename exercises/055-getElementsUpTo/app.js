const getElementsUpTo = (array, n) => {
    const newArr = array.slice(0, n);
    return newArr;

}
let output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3);
console.log(output);