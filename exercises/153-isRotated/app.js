function isRotated(str1, str2) {
    let fracc = str1.split('');
    let aux = [];
    let result;

    for (let i of fracc) {
        aux.push(str2.indexOf(i));
    }
    result = !aux.includes(-1);
    return result;
}

// console.log(isRotated('hello world', 'orldhello w')) // => true
console.log(isRotated('hello world', 'omrel wp')) // => false
// console.log(isRotated('Work from Home', 'kfmoemro Hor W'));