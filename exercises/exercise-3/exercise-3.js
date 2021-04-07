let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];
let [{ itemName, quantity, unitPrice }] = order;
console.log("QTY", "\t", "ITEM", "\t", "\t", "\t", "TOTAL");

order.map(({ itemName, quantity, unitPrice }) =>
  console.log(
    quantity,
    "\t",
    itemName,
    "\t",
    "\t",
    (unitPrice * quantity).toFixed(2)
  )
);

console.log(
  "Total:",
  order
    .map(({ quantity, unitPrice }) => quantity * unitPrice)
    .reduce((a, b) => a + b, 0)
);
