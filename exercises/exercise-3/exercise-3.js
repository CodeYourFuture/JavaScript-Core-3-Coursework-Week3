let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

// eslint-disable-next-line no-unused-vars
const [
  hotCake,
  applePie,
  eggMcMuffin,
  sausageMcMuffin,
  hotCoffee,
  hashBrown,
] = order;

console.log("QTY      ITEM         PRICE");
console.log(
  `${hotCake.quantity}      ${hotCake.itemName}       ${hotCake.unitPrice}`
);
console.log(
  `${applePie.quantity}      ${applePie.itemName}       ${applePie.unitPrice}`
);
console.log(
  `${eggMcMuffin.quantity}      ${eggMcMuffin.itemName}     ${eggMcMuffin.unitPrice}`
);
console.log(
  `${sausageMcMuffin.quantity}      ${sausageMcMuffin.itemName}   ${sausageMcMuffin.unitPrice}`
);
console.log(
  `${hotCoffee.quantity}      ${hotCoffee.itemName}         ${hotCoffee.unitPrice}`
);
console.log(
  `${hashBrown.quantity}      ${hashBrown.itemName}       ${hashBrown.unitPrice}`
);
