let obj = {
    key: [10, 20, 50, 50]
};

function getElementsLessThan100AtProperty(obj, key) {
    let myArr = [];

    for (key in obj) {
        if (!(Array.isArray(obj[key])) || obj[key] < 1) return [];
        else
            for (let i = 0; i < obj[key].length; i++) {
                for (x of obj[key]) {
                    if ((obj[key][i] && obj[key][i + 1]) > 100) return [];
                    else if (x < 100) {
                        myArr.push(x);
                        i++;
                    }

                }
            }
    }
    return myArr;
}

let output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output);