let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

function printOrders(arrayOfOrders){
  let [a, b, c, d, e, f] = arrayOfOrders;
  const tabRegEx = /\t/;
  const newLRegEx = /\n/;

  console.log(`
  QTY             ITEM                TOTAL
  ${a.quantity}   ${a.itemName}       ${(a.unitPrice * a.quantity).toFixed(2)}
  ${b.quantity}   ${b.itemName}       ${(b.unitPrice * b.quantity).toFixed(2)}
  ${c.quantity}   ${c.itemName}       ${(c.unitPrice * c.quantity).toFixed(2)}
  ${d.quantity}   ${d.itemName}       ${(d.unitPrice * d.quantity).toFixed(2)}
  ${e.quantity}   ${e.itemName}       ${(e.unitPrice * e.quantity).toFixed(2)}
  ${f.quantity}   ${f.itemName}       ${(f.unitPrice * f.quantity).toFixed(2)}
  `);
}

printOrders(order);
