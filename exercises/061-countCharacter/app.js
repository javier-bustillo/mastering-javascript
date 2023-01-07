const countCharacter = (str, char) => {
    let i = 0;
    let aux = 0;
    for (i; i < str.length; i++) {
        if (str.charAt(i) === char) {
            aux += 1;
        };

    }

    return aux;
}
let output = countCharacter('I am a hacker', 'a');
console.log(output);