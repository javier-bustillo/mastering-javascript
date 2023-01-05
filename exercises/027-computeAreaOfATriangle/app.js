const computeAreaOfATriangle = (base, height) => {
    let triangleArea = 1 / 2 * base * height;
    return triangleArea;
}

let output = computeAreaOfATriangle(4, 6);
console.log(output);