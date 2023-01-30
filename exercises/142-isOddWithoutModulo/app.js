function isOddWithoutModulo(num) {
    let x = num / 2;
    let y = Math.trunc(x);
    let z = y * 2;
    let result = num - z;

    if (result !== 0) return true;
    else return false;

}
let output = isOddWithoutModulo(17);
console.log(output); // --> true