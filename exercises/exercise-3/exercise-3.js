let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

// Solution
let total = 0;
const itemInfo = ({name,qty,unitPrice}) => {
  total += qty * unitPrice;
  return `${qty.toString().padEnd(10, " ")}${name.padEnd(
    20,
    " "
  )}${(qty * unitPrice).toFixed(2)}`;
};

console.log(`${"Qty".padEnd(10, " ")}${"Item".padEnd(20, " ")}Total`);
order.forEach((item) => {
    item = { name: item.itemName, qty: item.quantity, unitPrice: item.unitPrice };
    console.log(itemInfo(item));
});
console.log(`\nTotal: ${total}`);
