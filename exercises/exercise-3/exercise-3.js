let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

// calculate total price of each item
function getPriceSum(qty, price) {
  return parseFloat(qty * price);
}

//loop into an object and display results
function printReceipt(result) {
  let count = 0;
  console.log(`,,,`);
  console.log(`QTY            ITEM                  TOTAL `);

  result.forEach((item) => {
    let { itemName, quantity, unitPrice } = item;
    let total = getPriceSum(quantity, unitPrice).toFixed(2);

    console.log(`${quantity}            ${itemName}                ${total}`);
    count += parseFloat(total);
  });

  console.log("\n");
  console.log("Total", count);
  console.log(`,,,`);
}

printReceipt(order);
