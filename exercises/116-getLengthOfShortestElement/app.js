let aux = 999999;

function getLengthOfShortestElement(arr) {
    if (arr.length < 1) return 0;
    else
        for (x of arr) {
            if (x.length < aux) aux = x.length;
        }
    return aux;
}
let output = getLengthOfShortestElement(['ones', 'two', 'three']);
console.log(output); // --> 3estElement(['one', 'two', 'three']);
console.log(output); // --> 3