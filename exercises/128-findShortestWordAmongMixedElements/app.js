function findShortestWordAmongMixedElements(arr) {
    let shortestStrElement = '';
    let aux = 9999999;
    let myArr = [];

    if (arr.length < 1) return '';
    else
        for (x of arr) {
            if (arr.every(x => typeof x !== 'string')) return '';
            else if (typeof x === 'string') {
                let elementLength = arr.map(element => element.length);
                let elementsSortedByLength = elementLength.sort();
                let shortest = elementsSortedByLength[0];

                let shortestElement = arr.find(element =>
                    element.length === shortest);

                return shortestElement;
            }
        }
}

let output = findShortestWordAmongMixedElements(['one', 4, 'two ', 2, 'three ']);
console.log(output); // --> 'two'