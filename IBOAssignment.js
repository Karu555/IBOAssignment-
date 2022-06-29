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
getUniqueProductCount();

function getUniquePrducts() {

    let result = [];

    for(let i  = 0  ; i < listOfProducts.length ; i++){
      let flag = true;
      for(let j = 0 ; j < result.length ; j++){
        if(listOfProducts[i].productName === result[j].productName){
          result[j].quantity = result[j].quantity + listOfProducts[i].quantity;
          flag = false;
        }
      }
        if(flag === true){
          result.push(listOfProducts[i]);
        }
      }
      
    
      console.log(result);
}

getUniquePrducts();

// function getUniquePrducts() {
//     var n = listOfProducts.length;
//     let newArray = [];
//     for(var i=0; i<n; i++){
//         for(var j=i+1; j<n; j++){
//             if(listOfProducts[i].productName == listOfProducts[j].productName ){
//                 newArray.push({productName: listOfProducts[i].productName, quantity: listOfProducts[i].quantity, description: listOfProducts[i].description})
//             }
//         }
//     }
//     console.log(newArray)
// }

// getUniquePrducts();


