function isEvenWithoutModulo(num) {
    let x = num / 2;
    let y = Math.trunc(x);
    let z = y * 2;
    let result = num - z;

    if (result === 0) return true;
    else return false;

}
let output = isEvenWithoutModulo(8);
console.log(output); // --> true