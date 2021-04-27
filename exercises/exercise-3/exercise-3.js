let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

function getItems(arr) {
  console.log(`QTY     ITEM      TOTAL`);
  let totalCost = arr.map((element) => {
    let { quantity, itemName, unitPrice } = element;
    console.log(
      ` ${quantity}    ${itemName}    ${(quantity * unitPrice).toFixed(2)}`
    );
    return `${(quantity * unitPrice).toFixed(2)}`;
  });
  let reduced = totalCost.map((i) => {
    return Number(i);
  });
  console.log(`TOTAL: ${reduced.reduce((a, b) => a + b, 0)}`);
}
getItems(order);
