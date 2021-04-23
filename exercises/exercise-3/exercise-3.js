let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];
let printTotalToTheConsole=0;
console.log(`${"qty".padEnd(10).toUpperCase()} ${"item".padEnd(20).toUpperCase()} ${"TOTAL"}`);
order.forEach(orderElement =>{
  //using array destructuring I would extra the quantity, itemName and unit price. Therefore I would have to assign the array property to the array element and later access them as variable
  let {quantity,itemName,unitPrice}=orderElement;
 const printToConsole=`${quantity.toString().padEnd(10)} ${itemName.padEnd(20)} ${(unitPrice*quantity).toFixed(2)}`;
 console.log(printToConsole);
 // calculate the subTotal
//  let subTotal=orderElement.unitPrice.map(el=);
// let calculate=subTotal.reduce(sum,0);
// function sum(accumulator,value){
//  return accumulator + value;
//}
let subTotal=unitPrice*quantity;
printTotalToTheConsole += subTotal;

});
// insert two line break \n\n and print the  printTotalToTheConsole output
console.log(`\n\nTotal: ${printTotalToTheConsole}`)
