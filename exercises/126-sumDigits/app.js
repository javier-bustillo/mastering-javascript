function sumDigits(num) {
    let aux = 0;
    let numToString = num.toString();

    if (numToString[0] === '-') {
        aux = aux - numToString[1];

        for (let i = 2; i < numToString.length; i++) {
            let str = Number(numToString[i]);
            aux += str;
        }
    } else {
        for (let i = 0; i < numToString.length; i++) {
            let str = Number(numToString[i]);
            aux += str;
        }
    }
    return aux;
}

let output = sumDigits(316);
console.log(output); // --> 4