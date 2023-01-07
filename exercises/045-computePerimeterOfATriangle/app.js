const computePerimeterOfATriangle = (side1, side2, side3) => {
    let result = side1 + side2 + side3;
    return result;
}
let output = computePerimeterOfATriangle(6, 4, 10);
console.log(output);