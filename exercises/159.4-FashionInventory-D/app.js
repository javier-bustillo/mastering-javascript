let inventory = [{
        name: 'Brunello Cucinelli',
        shoes: [{
                name: 'tasselled black low-top lace-up',
                price: 1000
            },
            {
                name: 'tasselled green low-top lace-up',
                price: 1100
            },
            {
                name: 'plain beige suede moccasin',
                price: 950
            },
            {
                name: 'plain olive suede moccasin',
                price: 1050
            },
        ],
    },
    {
        name: 'Gucci',
        shoes: [{
                name: 'red leather laced sneakers',
                price: 800
            },
            {
                name: 'black leather laced sneakers',
                price: 900
            },
        ],
    },
];

function getLaceNameDataForShoes(inventory) {
    let result = [];
    let myObj = {};

    inventory.map(e => {
        e.shoes.map(x => {
            let arrSplit = []
            let indexOfWord = 0;

            if (x.name.includes('laced') || x.name.includes('lace')) {
                arrSplit = x.name.split(' ');
                for (x of arrSplit) {
                    if (x.includes('lace') || x.includes('laced')) {
                        indexOfWord = arrSplit.indexOf(x);
                    };
                }
                myObj = {
                    nameWords: arrSplit,
                    targetWordIndex: indexOfWord
                }
                result.push(myObj);
            }
        });
    });
    return result;
}

let output = getLaceNameDataForShoes(inventory);
console.log(output);