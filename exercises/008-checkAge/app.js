const checkAge = (name, age) => {
    if (age < 21) return `Go home, ${name}!`;
    else return `Welcome, ${name}!`;
}
let output = checkAge('Adrian', 18);
console.log(output);