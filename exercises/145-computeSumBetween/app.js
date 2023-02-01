function computeSumBetween(num1, num2) {
    let aux = 0;

    if (num1 > num2) return 0;
    else
        for (let i = num1; i < num2; i++) {
            aux += i;
        };

    return aux;

}

let output = computeSumBetween(2, 5);
console.log(output); // --> 9