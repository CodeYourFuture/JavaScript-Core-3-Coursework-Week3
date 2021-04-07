let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

function printReceipt() {
  console.log('---------------------------------------------');
  console.log('QTY\t\tITEM\t\t\tTOTAL');
  console.log('---------------------------------------------');
  let finalTotal = 0;
  for (customerOrder of order) {
    let { quantity, itemName, unitPrice } = customerOrder;
    let costOfItems = unitPrice*quantity;
    if (itemName.length > 13)  {
      console.log(`${quantity}\t\t${itemName}\t£${costOfItems.toFixed(2)}`);
    } else {
      console.log(`${quantity}\t\t${itemName}\t\t£${costOfItems.toFixed(2)}`);
    }
    finalTotal += costOfItems;
  }
  console.log('---------------------------------------------');
  console.log(`Total:\t\t£${finalTotal}`);
  console.log('---------------------------------------------');
};

printReceipt();