let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

const { 
  itemName, 
  quantity, 
  unitPrice 
} = order;

let sum = 0;

function receipt(data) {
  let total = 0;

  console.log(`QTY\t\tITEM\t\t\t\tTOTAL`);

  data.forEach((element) => {
    total = (element.unitPrice * element.quantity).toPrecision(3);
    sum += parseFloat(total);
    console.log(`${element.quantity}\t\t${element.itemName}\t\t\t${total}`);
  });

  console.log(`\nTotal: ${sum}`);
}

receipt(order);