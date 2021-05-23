let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

// loop through the array
//hand pick each item to display
// add the total?
console.log(`QTY    ITEM        PRICE`);
// order.forEach((item) => {
//   let {quantity, itemName, unitPrice} = item;
  
//   console.log(`${quantity}  ${itemName}    ${unitPrice}`);
//   break;
//   console.log(`TOTAL: ${quantity * unitPrice} `)
// } 
// )

for (let index = 0; index < order.length; index++) {
  const {quantity, itemName, unitPrice} = order[index];
  console.log(`${quantity}  ${itemName}    ${unitPrice * quantity}`);
  
  //console.log(`TOTAL: ${unitPrice * index} `);
}

// console.log(`TOTAL: ${quantity * unitPrice} `) // where to add total? how to close loop?