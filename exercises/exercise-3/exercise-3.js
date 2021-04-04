let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

let {
  itemName,
  quantity,
  unitPrice
} = order;

let total = 0;

console.log(`QTY\t\t\tITEM\t\t\t\t\tTOTAL`);

for (const item of order) {
  if (item.quantity > 1) {
      item.unitPrice = item.unitPrice * item.quantity;
  }

  console.log(`${item.quantity}\t\t\t${item.itemName.padEnd(16)}\t\t${item.unitPrice.toFixed(2)}`);

  total = total + item.unitPrice;

}

console.log(`\nTotal: ${total.toFixed(2)}`);

