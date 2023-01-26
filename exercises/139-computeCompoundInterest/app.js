function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
    let periodicCompunding = 0;
    let compoundInterest = 0;

    periodicCompunding = principal * Math.pow(1 + interestRate / compoundingFrequency, compoundingFrequency * timeInYears);
    compoundInterest = periodicCompunding - principal;

    return compoundInterest;
}

let output = computeCompoundInterest(1500, .043, 4, 6);
console.log(output); // --> 438.83682213410543