const isOldEnoughToDrink = (age) => {
    if (age >= 21) {
        return true
    } else {
        return false
    }
}
let output = isOldEnoughToDrink(1);
console.log(output);