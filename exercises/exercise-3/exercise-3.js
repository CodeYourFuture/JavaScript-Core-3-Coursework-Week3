let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

let [{ itemName, quantity, unitPrice }] = order;

console.log(`QTY\tITEM\t\t\t\tTOTAL`);

let total = 0;

for (value in order) {
  //  console.log(`value of quantity: ${order[value].quantity}`)
  console.log(`${order[value].quantity}\t${order[value].itemName.padEnd(16, " ")}\t \t${order[value].unitPrice * order[value].quantity}`);  
  // console.log(`Total1: ${total}`)
  total += order[value].unitPrice * order[value].quantity;
  // console.log(`Total2: ${total}`)
};

// let total = order.reduce(someFunction, 0);
// function someFunction (previousNumber, currentNumber) {
//   return previousNumber + currentNumber.unitPrice * currentNumber.quantity;
// };

console.log(`Total: ${total}`);
