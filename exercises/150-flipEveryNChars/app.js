function flipEveryNChars(input, n) {
    let reges = `(.{${n}})`;
    let regesParsed = new RegExp(reges);
    let result = input
        .split(regesParsed)
        .map(e => e.split('').reverse().join(''))
        .join('');

    return result;
}

let input = 'a short example';
let output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma