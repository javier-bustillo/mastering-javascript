function detectOutlierValue(string) {
    let oddNumbers = 0;
    let evenNumbers = 0;
    let strToArr = string.split(' ');

    for (x of strToArr) {
        if (Number.parseInt(x) % 2 !== 0) oddNumbers += 1;
        if (Number.parseInt(x) % 2 === 0) evenNumbers += 1;
    }
    if (evenNumbers > oddNumbers) {
        for (x of strToArr) {
            if (Number.parseInt(x) % 2 !== 0) return ((strToArr.indexOf(x) + 1));
        }
    } else {
        for (x of strToArr) {
            if (Number.parseInt(x) % 2 === 0) return ((strToArr.indexOf(x) + 1));
        }
    }

}

// Third number is odd, while the rest of the numbers are even
let output = detectOutlierValue("2 4 7 8 10");
console.log(output); // 3

// Second number is even, while the rest of the numbers are odd
let output1 = detectOutlierValue("1 10 1 1");
console.log(output1); // 2