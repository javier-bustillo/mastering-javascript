function modulo(num1, num2) {
    let i = 0;
    let modulo = 0;

    for (i; i < num1; i++) {
        i += num1 - i;
    }
    console.log(i);
}

let output = modulo(25, 4);
console.log()