let person = {
    age: 45
}

const isPersonOldEnoughToVote = person => {
    if (person.age >= 18) return true;
    else return false;

}
let output = isPersonOldEnoughToVote(person);
console.log(output);