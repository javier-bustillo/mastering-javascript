/* function computeFactorialOfN(n) {
    if (n < 0) return 'Number has to be positive';
    if (n === 0 || n === 1) return 1;
    else return n = n * computeFactorialOfN(n - 1);
} */

function computeFactorialOfN(n) {
    let result = 1;

    if (n < 0) return 'Number has to be positive';
    if (n === 0 || n === 1) return 1;
    else
        for (let i = n; i >= 1; i--) {
            result = result * i;
        }
    return result;
}

let output = computeFactorialOfN(4);
console.log(output); // --> 6