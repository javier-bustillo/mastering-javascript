function findPairForSum(array, number) {
    let result = [];
    for (x of array) {
        for (y of array) {
            if (x + y === number) {
                return result = [x, y];
            }
        }
    }
}

let pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]