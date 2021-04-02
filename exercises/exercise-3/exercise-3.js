let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

function receiptMaker() {
  console.log("QTY\t ITEM\t\t\t\tTOTAL");

  let total = 0;

  order.forEach((item) => {
    const { quantity, itemName, unitPrice } = item;
    total += quantity * unitPrice;
    console.log(
      `${quantity}\t ${itemName.padEnd(18)} £${(unitPrice * quantity).toFixed(
        2
      )}`
    );
  });

  console.log(`\nTotal : £${total}`);
}

receiptMaker();
