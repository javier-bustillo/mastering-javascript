function filterEvenLengthWords(words) {
    let myArr = [];

    myArr = words.filter(word => word.length % 2 === 0);
    return myArr;
}

let output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']