function modulo(num1, num2) {
    let x = num1 / num2;
    let y = Math.trunc(x);
    let z = y * num2;
    let result = num1 - z;

    return result;

}

let output = modulo(25, 4);
console.log(output); // --> 1