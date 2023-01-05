let person = {
    age: 21
}

const isPersonOldEnoughToDrink = person => {
    if (person.age >= 21) return true;
    else return false;

}
let output = isPersonOldEnoughToDrink(person);
console.log(output);