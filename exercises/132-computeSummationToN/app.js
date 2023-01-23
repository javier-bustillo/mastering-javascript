function computeSummationToN(n) {
    let aux = 0;

    for (let i = 0; i < n; i++) {
        aux += n - i;
    }
    return aux;
}

let output = computeSummationToN(4);
console.log(output); // --> 21