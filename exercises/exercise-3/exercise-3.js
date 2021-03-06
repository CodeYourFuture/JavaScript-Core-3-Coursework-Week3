 let order = [
     { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29},
     { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39},
     { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.80},
     { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.00},
     { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.00},
     { itemName: "Hash Brown", quantity: 4, unitPrice: 0.40}
 ]
 

 
 let total = 0;
 console.log(`QTY    ITEM                 TOTAL`);
 let takeOutOrderReceipt = order.forEach(
   ({ itemName, quantity, unitPrice }) => {
     total += quantity * unitPrice;
     console.log(
       `${quantity}     ${itemName}              ${(
         quantity * unitPrice
       ).toFixed(2)}`
     );
   }
 );

 console.log(`\nTOTAL: ${total}`);





























    //let [hotCakes, applePie, eggMcMuffin, SausageMcMuffin, HotCoffee, HashBrown] = order;
//let elements = [hotCakes, applePie, eggMcMuffin, SausageMcMuffin, HotCoffee, HashBrown];

//  function takeOutOrderReceipt(){

//     let total = (hotCakes.unitPrice *  hotCakes.quantity) + (applePie.unitPrice * applePie.quantity) + (eggMcMuffin.unitPrice * eggMcMuffin.quantity) + (SausageMcMuffin.unitPrice * SausageMcMuffin.quantity) + (HotCoffee.unitPrice * HotCoffee.quantity) + (HashBrown.unitPrice * HashBrown.quantity);
//     console.log(`QTY    ITEM                      TOTAL`);
//     order.forEach(item => {
//         console.log(`${item.quantity}      ${item.itemName}                 ${(item.unitPrice * item.quantity).toFixed(2)}`)});
//     console.log(`\nTOTAL: ${total}`);
//  };
//  takeOutOrderReceipt();