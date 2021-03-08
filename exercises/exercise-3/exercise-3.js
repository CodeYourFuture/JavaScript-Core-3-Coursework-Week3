// Global variable
let Total = 0;

function calculate(quantity, unitPrice) {
  return quantity * unitPrice;
}

let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

// += take your variable total and add the value on the right to that total and store it back to that total
order.forEach((element) => {
  let { itemName, quantity, unitPrice } = element;
  console.log(`QTY ${quantity} ITEM ${itemName}, TOTAL${calculate(unitPrice, quantity)}`);
  Total += calculate(unitPrice, quantity);
});

console.log(`Total: ${Total}`);
