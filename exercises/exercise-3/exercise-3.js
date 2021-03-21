let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

let { itemName, quantity, unitPrice } = order;
let total = 0;
let receipt = [];

function makeRcpt(set) {
  set.forEach((item) => {
    let price = item.unitPrice * item.quantity;
    total += price;

    let result = {
      QTY: item.quantity,
      ITEM: item.itemName,
      TOTAL: price.toFixed(2),
    };
    receipt.push(result);
  });
  console.log(receipt, `Total: ${total}`);
}

makeRcpt(order);
