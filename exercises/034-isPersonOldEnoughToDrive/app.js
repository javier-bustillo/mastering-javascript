let person = {
    age: 22
}
const isPersonOldEnoughToDrive = person => {
    if (person.age >= 16) return true;
    else return false;

}
let output = isPersonOldEnoughToDrive(person);
console.log(output);