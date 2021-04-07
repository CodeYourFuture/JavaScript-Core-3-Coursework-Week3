let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffing", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

// ## Expected result

//   ```
// QTY     ITEM                TOTAL
// 1       Hot Cakes           2.29
// 2       Apple Pie           2.78
// 1       Egg McMuffin        2.80
// 1       Sausage McMuffin    3.00
// 2       Hot Coffee          2.00
// 4       Hash Brown          1.60

// Total: 14.47
// ```
function totalCost(array){
  console.log(`QTY\tITEM\t\t\tTOTAL`);
  console.log(' ');
  let total = 0;
array.forEach(element => {
  let {itemName, quantity, unitPrice} = element;
  let costOfItems = unitPrice * quantity;
  total += costOfItems;
  if(itemName.length > 15) {
    console.log(`${quantity}\t${itemName}\t${unitPrice.toFixed(2)}`);
  } else {
    console.log(`${quantity}\t${itemName}\t\t${unitPrice.toFixed(2)}`);
  }
  
  
});
console.log(' ');
console.log('Total:','£' + total.toFixed(2));
}

totalCost(order);

