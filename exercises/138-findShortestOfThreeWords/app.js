function findShortestOfThreeWords(word1, word2, word3) {
    let myArr = [];

    myArr.push(word1);
    myArr.push(word2);
    myArr.push(word3);


    let elementsLength = myArr.map(element => element.length);
    let elementsSortedByLength = elementsLength.sort();
    let shortest = elementsSortedByLength[0];

    let shortestElement = myArr.find(x => x.length === shortest);

    return shortestElement;
}
let output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'