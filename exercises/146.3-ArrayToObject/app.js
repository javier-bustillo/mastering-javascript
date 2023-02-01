function transformEmployeeData(array) {
    let myArr = [];
    for (let x of array) {
        let obj = {};
        for (let y of x) {
            obj[y[0]] = y[1];
        }
        myArr.push(obj);
    }
    return myArr;
}
let output = transformEmployeeData([
    [
        ['firstName', 'Joe'],
        ['lastName', 'Blow'],
        ['age', 42],
        ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'],
        ['lastName', 'Jenkins'],
        ['age', 36],
        ['role', 'manager']
    ]
]);
console.log(output);