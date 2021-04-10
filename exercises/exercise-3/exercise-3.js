let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

function receipt(arr){
  let total = 0;
  console.log(`QTY  ITEM  PRICE`)
  for(let i=0; i<arr.length; i++){
  let eachOrder = arr[i];
  const {itemName, quantity, unitPrice} = eachOrder;
  let amount = unitPrice * quantity
  total += amount
  console.log(`${quantity}  ${itemName}  ${unitPrice}`)
}
  console.log(`Total: ${total}`)
}

console.log(receipt(order))
