const computePerimeterOfARectangle = (length, width) => {
    let rectanglePerimeter = (length * 2) + (width * 2);

    return rectanglePerimeter;
}
let output = computePerimeterOfARectangle(5, 2);
console.log(output);