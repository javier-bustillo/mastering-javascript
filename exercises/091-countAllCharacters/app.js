function countAllCharacters(str) {
    let myObj = {};

    if (str.length < 1) return myObj;
    for (x of str) {
        if (myObj[x] === undefined) {
            myObj[x] = 1;
        } else {
            myObj[x] += 1;
        }
    }

    return myObj;
}

let output = countAllCharacters('banana');
console.log(output);