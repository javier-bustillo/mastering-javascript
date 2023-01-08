const convertDoubleSpaceToSingle = str => {
    let strToArray = str.split('  ');
    let arrToStr = strToArray.join(" ");
    return arrToStr;

}
let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"