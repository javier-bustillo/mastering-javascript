let myObj = {
    name: 'Sam',
    age: 20
}

const removeProperty = (obj, key) => {
    delete obj[key];
    return obj;
}

removeProperty(myObj, 'name');
console.log(myObj.name);