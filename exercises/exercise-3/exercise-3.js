let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];
function shoppingOrder(arr){
  let total=0;
  for(let i=0;i<arr.length;i++){
    let{itemName:item,quantity:number,unitPrice:price}=arr[i];
    let allPrice=number*price
    total+=allPrice;
    console.log(`${number} ${item}         ${allPrice}`)
  }
  console.log(total);
}
shoppingOrder(order);