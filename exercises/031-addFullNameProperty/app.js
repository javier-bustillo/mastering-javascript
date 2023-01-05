let person = {
    firstName: 'Jade',
    lastName: 'Smith'
}

const addFullNameProperty = myObj => {
    myObj.fullName = myObj.firstName + ' ' + myObj.lastName;
    return myObj;
}

addFullNameProperty(person);
console.log(person.fullName)