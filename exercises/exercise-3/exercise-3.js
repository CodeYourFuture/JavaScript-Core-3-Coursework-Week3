let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

function printTakeOutOrder(orderList) {
  console.log(`QTY\tITEM\t\t\tTOTAL`);
  let orderTotal = 0;
  orderList.map((item) => {
    let {itemName, quantity, unitPrice} = item;
    let total = quantity * unitPrice;
    orderTotal += total;
    total = total.toFixed(2);
    console.log(`${quantity}\t${itemName}\t\t${total}`);
  });

  console.log(`\nTotal: ${orderTotal}`);
}

printTakeOutOrder(order);
