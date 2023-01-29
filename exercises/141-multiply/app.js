function multiply(num1, num2) {
    let result = 0;
    if (num1 < 0) {
        for (let i = 0; i < num2; i++) result += num1;
    } else {
        for (let i = 0; i < num1; i++) result += num2;
    }
    return result;
}

let output = multiply(-3, 7);
console.log(output); // --> 28