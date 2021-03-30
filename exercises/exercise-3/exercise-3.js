let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

function receipt(itemsArr) {
  let totalPrice = 0;
  console.log(`QTY \tITEM \t\t\tTOTAL`);
  console.log("------------------------------------------");
  itemsArr.map((item) => {
    let totalItemPrice = item.quantity * item.unitPrice;
    const { quantity, itemName, total = totalItemPrice.toFixed(2) } = item;
    console.log(`${quantity}\t${itemName}\t\t£${total}`);
    totalPrice += parseFloat(totalItemPrice);
  });

  console.log("------------");
  console.log(`Total: ${totalPrice}`);
}
receipt(order);
