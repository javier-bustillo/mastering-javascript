function getLengthOfLongestElement(arr) {
    let aux = 0;
    if (arr.length < 1) return 0;
    else
        for (x of arr) {
            if (x.length > aux) aux = x.length;
        }
    return aux;
}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5