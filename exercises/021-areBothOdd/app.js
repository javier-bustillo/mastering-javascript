const areBothOdd = (num1, num2) => {
    if ((num1 % 2 !== 0) && (num2 % 2 !== 0)) return true;
    else return false;
}
let output = areBothOdd(10, 11);
console.log(output);