let currentInventory = [{
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

function renderAverageCostPerDesigner(inventory) {
    let result = [];
    inventory.map(e => {
        let price = 0;
        let length = e.shoes.length;
        e.shoes.map(x => {
            price += x.price;
        })
        result.push({
            name: e.name,
            averagePrice: price / length
        });
    });

    return result;
}




let output = renderAverageCostPerDesigner(currentInventory);
console.log(output);