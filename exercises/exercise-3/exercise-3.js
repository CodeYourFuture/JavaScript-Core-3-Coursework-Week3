let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

let [{ itemName, quantity, unitPrice }] = order;

console.log(`QTY  ITEM              TOTAL`);

for (value in order) {
  // console.log(`value: ${order[value].quantity}`)
  console.log(`${order[value].quantity}    ${order[value].itemName}         ${order[value].unitPrice}`);
};

let total = order.reduce(
  function (previousNumber, currentNumber) {
    return previousNumber + currentNumber.unitPrice;
  }, 0);


console.log(`Total: ${total}`);