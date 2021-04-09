let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];


function groceryReceipt(order){
  console.log(`#    PRODUCTS         TOTAL AMOUNT`);
  let total = 0

  order.forEach((product) => {

      let { itemName, quantity, unitPrice } = product;

      total += quantity * unitPrice;
      
      console.log(`${quantity}    ${itemName}        £${(
        quantity * unitPrice).toFixed(2)}`);
    });
    console.log(`\nTOTAL: ${total}`);
}
groceryReceipt(order)