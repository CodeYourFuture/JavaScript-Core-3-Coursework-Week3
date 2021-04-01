let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

let total = 0;
console.log(`${"QTY".padEnd(6)} ${"ITEM".padEnd(18)} ${"TOTAL"}`);
order.map((element) => {
  let { quantity, itemName, unitPrice } = element;
  console.log(
    `${quantity.toString().padEnd(6)} ${itemName.padEnd(18)} ${(
      unitPrice * quantity
    ).toFixed(2)}`
  );
  let totalPerItem = unitPrice * quantity;
  total += totalPerItem;
});
console.log(`\nTotal: ${total}`);
