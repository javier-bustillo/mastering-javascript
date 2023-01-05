let person = {
    age: 20
}

const isPersonOldEnoughToDrinkAndDrive = myObj => {
    // the person object contains an "age" property inside
    // Add your code after this line

    if (myObj.age >= 21 || myObj.age >= 23) return true;
    else if (myObj.age < 21) return false;
}
let output = isPersonOldEnoughToDrinkAndDrive(person);
console.log(output);