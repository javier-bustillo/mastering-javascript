function calculateBillTotal(preTaxAndTipAmount) {
    const tipPercentage = 15;
    const taxPercentage = 9.5;
    let taxAmount = (preTaxAndTipAmount * taxPercentage) / 100;
    let tipAmount = (preTaxAndTipAmount * tipPercentage) / 100;

    let result = preTaxAndTipAmount + taxAmount + tipAmount;
    return result;
}
let output = calculateBillTotal(20);
console.log(output); // --> 24.9