/* Recursive mplementaction of search */
// A recursive binary search function. It returns
// location of value in given array arr[l..r] is present,
// otherwise null
/* function search(array, firstValue, lastValue, value) {
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

const ARR = [1, 3, 16, 22, 31, 33, 34];
let arrLength = ARR.length
let result = search(ARR, 0, arrLength - 1, 1);
console.log(result); */

function search(array, value) {
    let firstIndex = 0;
    let lastIndex = Number(array.length - 1);
    let midIndex = Math.floor(lastIndex - firstIndex) / 2;
    let noMatchValue = null || 0;

    if (array[midIndex] === value) return midIndex;
    if (array[midIndex] > value) {
        for (let i = 0; i <= midIndex - 1; i++) {
            if (array[i] === value) return i;
        }
    }
    if (array[midIndex] < value) {
        let i = midIndex + 1;
        for (i; i <= lastIndex; i++) {
            if (array[i] === value) return i;
        }
    }
    return noMatchValue;
}

let arr = [1, 3, 16, 22, 31, 33, 34];
console.log(search(arr, 31));