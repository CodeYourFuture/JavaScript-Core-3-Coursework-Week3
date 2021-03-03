let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];
let total = 0;
console.log(`Qty  item            Total`);
order.map((item) => {
  const { itemName, quantity, unitPrice } = item;
  console.log(`${quantity}   ${itemName}       ${unitPrice}`);
  total = total + unitPrice;
});

console.log(`Total:  ${total}`);
