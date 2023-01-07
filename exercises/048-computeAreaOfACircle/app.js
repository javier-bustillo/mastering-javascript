const computeAreaOfACircle = radius => {
    let result = Math.PI * Math.pow(radius, 2);
    return result;
}

let output = computeAreaOfACircle(4);
console.log(output);