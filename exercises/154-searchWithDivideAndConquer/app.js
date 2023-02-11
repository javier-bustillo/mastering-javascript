function search(array, firstValue, lastValue, value) {
    /* Recursive mplementaction of search */
    // A recursive binary search function. It returns
    // location of value in given array arr[l..r] is present,
    // otherwise null
    let midValue = firstValue + Math.floor((lastValue - firstValue) / 2);

    if (lastValue >= firstValue) {
        console.log(array[midValue]);
        if (array[midValue] === value) {
            return midValue;
        }
        if (array[midValue] > value) {
            return search(array, firstValue, midValue - 1, value);
        } else {
            return search(array, midValue + 1, lastValue, value);
        }
    }
    return null;
}

const ARR = [1, 3, 16, 22, 31, 33, 34]

let arrLength = ARR.length
let result = search(ARR, 0, arrLength - 1, 1);
console.log(result);



// console.log(search(arr, 31)); // => 4