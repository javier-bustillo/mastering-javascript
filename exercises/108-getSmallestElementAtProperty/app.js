let obj = {
    key: [2, 3, 1]
};

function getSmallestElementAtProperty(obj, key) {

    let aux = 999999999999;

    if (obj[key] < 1 || !(Array.isArray(obj[key]))) return [];
    else
        for (x of obj[key]) {
            if (x < aux) aux = x;
        }

    return aux;

}

let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1