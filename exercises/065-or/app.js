const or = (expression1, expression2) => {
    let result = !(!expression1 && !expression2);
    return result;

}
let output = or(true, false);
console.log(output);