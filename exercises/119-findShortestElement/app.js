function findShortestElement(arr) {
    if (arr.length < 1) return '';

    let elementsLength = arr.map(x => x.length);
    let elementsSortedByLength = elementsLength.sort();
    let shortest = elementsSortedByLength[0];

    let shortestElement = arr.find(element =>
        element.length === shortest);

    return shortestElement;

}

let output = findShortestElement(['b', 'a', 'two', 'fifteen', 'three']);
console.log(output); // --> 'a'