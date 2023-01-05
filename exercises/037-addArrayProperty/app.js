let myObj = {}
const myArr = [1, 3];

const addArrayProperty = (obj, key, arr) => {
    obj[key] = arr;
    return obj;

}

addArrayProperty(myObj, 'myProperty', myArr);
console.log(myObj.myProperty);