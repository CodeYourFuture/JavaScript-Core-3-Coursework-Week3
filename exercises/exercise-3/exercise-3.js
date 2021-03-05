 let order = [
     { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29},
     { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39},
     { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.80},
     { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.00},
     { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.00},
     { itemName: "Hash Brown", quantity: 4, unitPrice: 0.40}
 ]

 let {itemName, quantity, unitPrice} = order;
 let total = 0;
 let receipt = [];

 function orderedReceipt(obj) {
     obj.forEach(item => {
         let price = item.unitPrice * item.quantity;
         total += price;

         let result = {
             QTY: item.quantity,
             ITEM: item.itemName,
             TOTAL: price.toFixed(2)
         };
         receipt.push(result);
     });
     console.table(receipt, ['QTY', 'ITEM', 'TOTAL']);
     console.log(`Total: ${total}`);
 }
 orderedReceipt(order);
 