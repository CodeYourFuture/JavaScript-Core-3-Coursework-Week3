let order = [
  {itemName: "Hot cakes", quantity: 1, unitPrice: 2.29},
  {itemName: "Apple Pie", quantity: 2, unitPrice: 1.39},
  {itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8},
  {itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0},
  {itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0},
  {itemName: "Hash Brown", quantity: 4, unitPrice: 0.4},
];
// console.table(order);
let [item1, item2, item3, item4, item5, item6] = order;
let items = [item1, item2, item3, item4, item5, item6];
let sum = 0;

console.log(` QTY \t\t ITEM \t\t TOTAL`);
items.forEach((item) => {
  let qty = item.quantity;
  let currentItem = item.itemName;
  let total = (item.unitPrice * item.quantity).toFixed(2);
  sum = sum + item.unitPrice * item.quantity;
  console.log(` ${qty} \t\t ${currentItem} \t ${total}`);
});
console.log(`\n Total: ${sum}`);
