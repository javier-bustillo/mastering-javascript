const addToFrontOfNew = (arr, element) => {
    const newArr = arr.slice(0);
    newArr.unshift(element);
    return newArr;
}


let input = [1, 2];
let output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); // --> [1, 2], 2];