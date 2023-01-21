let longestElement = '';


function getLongestElement(arr) {
    if (arr.length < 1) return '';

    let elementsLength = arr.map(element => element.length);
    let elementsSortedByLength = elementsLength.sort();
    let longest = elementsSortedByLength[elementsSortedByLength.length - 1];

    longestElement = arr.find(x => x.length === longest);

    return longestElement;

}
let output = getLongestElement(['one', 'two', 'a', 'three', 'threes']);
console.log(output); // --> 'three'