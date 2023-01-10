const getIndexOf = (char, str) => {
    for (let i = 0; i < str.length; i++) {
        if (char === str[i]) return i;
    }
    return -1;
}

let output = getIndexOf('a', 'I am a hacker');
console.log(output);