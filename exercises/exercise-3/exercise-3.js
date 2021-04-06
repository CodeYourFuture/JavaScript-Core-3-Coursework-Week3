let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

const createReceipt = (orderObj) => {
  let toPay = 0;

  console.log(`QTY ITEM TOTAL`);

  for (const { itemName, quantity, unitPrice } of orderObj) {
    const unitTotal = unitPrice * quantity;
    toPay += unitTotal;
    console.log(`${quantity} ${itemName} ${unitTotal.toFixed(2)}`);
  }

  console.log(`Total: ${toPay}`);
};

createReceipt(order);
