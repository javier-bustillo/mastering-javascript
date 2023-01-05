let person1 = {
    name: 'Joe Blow',
    role: 'schlub'
}

let person2 = {
    name: 'Mr. Burns',
    role: 'supervisor'
}

const addObjectProperty = (myObj1, key, myObj2) => {
    myObj1[key] = myObj2;
    return myObj1;
}

addObjectProperty(person1, 'manager', person2);
console.log(person1.manager);