function getLongestOfThreeWords(word1, word2, word3) {
    let myArr = [];

    myArr.push(word1);
    myArr.push(word2);
    myArr.push(word3);

    let elementsLength = myArr.map(element => element.length);
    let elementsSortedByLength = elementsLength.sort();
    let longest = elementsSortedByLength[elementsSortedByLength.length - 1];

    longestElement = myArr.find(x => x.length === longest);

    return longestElement;



}

let output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'