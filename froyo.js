let froyoOrders = "";
let froyoOrdersArray = [];
let flavorsOrdered = [];

const flavor = {};

froyoOrders = prompt("Please enter your order");

froyoOrdersArray = froyoOrders.split(",");

for (i=0; i<froyoOrdersArray.length; i++) {
    froyoOrdersArray[i] = froyoOrdersArray[i].trim();
}

console.log(froyoOrdersArray);

for (i = 0; i<froyoOrdersArray.length; i++) {
   if (flavorsOrdered.includes(froyoOrdersArray[i]) == false) {
    flavorsOrdered.push(froyoOrdersArray[i]);
    console.log("pushed " + froyoOrdersArray[i]);
   }
}
function toObject(arr) {
    let flavorsObject = [];
    for (let i=0; i<arr.length; i++) {
        flavorsObject[i] = flavor.arr[i]; 
        flavorsObject[i].count = 0; 
    }
        //console.log(flavorsObject);
    return flavorsObject;
}

const counterObject = toObject(flavorsOrdered);

console.log(counterObject);



//const arrayOfFlavorObjects = froyoOrdersArray.map()

//console.log(flavorsOrdered);
console.log("i hate this assignment");

console.log(counterObject);





//console.log(froyoOrders);