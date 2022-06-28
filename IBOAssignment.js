const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
},
{
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
},
{
    productName: "TV",
    quantity: 10,
    description: "television"
},
{
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
},
{
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
}
];


function getUniqueProductCount() {
    var n = listOfProducts.length;
    var obj = {};
    for (var i = 0; i < n; i++) {
        if (obj[listOfProducts[i].productName] == undefined) {
            obj[listOfProducts[i].productName] = 1;
        } else {
            obj[listOfProducts[i].productName] += 1;
        }
    }
    console.log(obj);
}
getUniqueProductCount(listOfProducts);

function getUniquePrducts() {

    const key = 'productName';

    const unique = [...new Map(listOfProducts.map(item =>
        [item[key], item])).values()];
    console.log(unique);
}

getUniquePrducts();

