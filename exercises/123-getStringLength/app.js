let aux = 0;

function getStringLength(string) {
    for (x of string) {
        if (x) aux += 1;
    }
    return aux;
}

let output = getStringLength('hellos');
console.log(output); // --> 5