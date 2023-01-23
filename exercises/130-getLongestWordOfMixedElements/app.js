function getLongestWordOfMixedElements(arr) {
    let myArr = [];

    if (arr.length < 1) return '';
    for (x of arr) {
        if (arr.some(x => x === String(x))) {
            if (x === String(x)) {
                myArr.push(x);
            }
        } else {
            return '';
        }
    }
    let elementsLength = myArr.map(element => element.length);
    let elementsSortedByLength = elementsLength.sort();
    let longest = elementsSortedByLength[elementsSortedByLength.length - 1];

    longestElement = arr.find(x => x.length === longest);
    return longestElement;

}
let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'