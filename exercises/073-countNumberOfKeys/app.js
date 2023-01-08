let obj = {
    person: "Rafael",
    lastName: "Leao",
    country: "Italy",
    city: "Milan",
    phoneNum: "123-456-789",
    jerseyNum: 27,
}

const countNumberOfKeys = obj => {
    let aux = 0;
    for (let key in obj) {
        if (obj[key]) {
            aux += 1;
        }
    }
    return aux;
}
console.log(countNumberOfKeys(obj))