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

    if (!customerData[firstName]) return greeting = 'Welcome! Is this your first time?';
    else if (customerData[firstName] && customerData[firstName].visits ===
        1) return greeting = `Welcome back, ${firstName}! We're glad you liked us the first time!`;
    else if (customerData[firstName] && customerData[firstName].visits >
        1) return greeting = `Welcome back, ${firstName}! So glad to see you again!`;

    return greeting;
}

let output = greetCustomer('Carrie');
console.log(output);