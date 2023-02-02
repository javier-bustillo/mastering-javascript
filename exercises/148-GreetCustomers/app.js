let customerData = {
    'Joe': {
        visits: 1
    },
    'Carol': {
        visits: 2
    },
    'Howard': {
        visits: 3
    },
    'Carrie': {
        visits: 4
    }
};

function greetCustomer(firstName) {
    let greeting = '';
    for (let key in customerData) {
        if (key === firstName) {
            return 'Hi';
        } else {
            return 'Bye';
        }
    }

    return greeting;
}
let output = greetCustomer('Joe');
console.log(output);