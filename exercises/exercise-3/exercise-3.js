let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

let [{ itemName, quantity, unitPrice }] = order;

console.log(`QTY\tITEM\t\t\t\tTOTAL`);  // Setting up the headers with tab spacing.

let totalPrice = 0; //  Variable to store the total price.
let totalItems = 0; //  Variable to store the total items.

for (values in order) {
  //  console.log(`values of quantity: ${order[values].quantity}`)
  //  Values returns/ an object/s, I access the keys and values using dot notaion and the destructured keys.
  console.log(`${order[values].quantity}\t${order[values].itemName.padEnd(16, " ")}\t \t${order[values].unitPrice * order[values].quantity}`);
  // console.log(`Total1: ${totalPrice}`)  //  Before increment
  totalPrice += order[values].unitPrice * order[values].quantity;
  totalItems += order[values].quantity
  /* adds 1 values to another and stores it in totalprice => takes the new values and add the next values to it and stores it in totalPrice...*/
  // console.log(`Total2: ${totalPrice}`) //  After increment
};

console.log(`Total Price: ${totalPrice}`);
console.log(`Total Items: ${totalItems}`);
