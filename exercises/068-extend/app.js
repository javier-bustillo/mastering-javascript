let obj1 = {
    a: 1,
    b: 2
};
let obj2 = {
    b: 4,
    c: 3
};

const extend = (obj1, obj2) => {
    for (let key in obj2) {
        if (obj1[key]) {
            obj1[key];
        } else {
            obj1[key] = obj2[key];
        }
    }
    return obj1;
}

extend(obj1, obj2);

console.log(obj1);
console.log(obj2);