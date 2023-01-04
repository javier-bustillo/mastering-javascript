const getProperty = (obj, key) => {
    return obj[key];
}
let computer = {
    brand: 'Apple'
};
let output = getProperty(computer, 'brand');
console.log(output);