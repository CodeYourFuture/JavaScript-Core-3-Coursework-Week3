 let order = [
     { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29},
     { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39},
     { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.80},
     { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.00},
     { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.00},
     { itemName: "Hash Brown", quantity: 4, unitPrice: 0.40}
 ]
 
// for(let i = 0; i < order.length; i++) {
    
    
        //let itemName = order[i].itemName;
        //let quantity = order[i].quantity;
        //let unitPrice = order[i].unitPrice;
        //let total = quantity * unitPrice;
        
     
        //console.log(`${itemName}                             ${quantity}                   ${unitPrice}         ${total}`);
        
        

        //}
        let {itemName, quantity, unitPrice} = order;
 let total = 0;
 let invoice = [];

 function createInvoice(elm) {
     elm.forEach(item => {
         let price = item.unitPrice * item.quantity;
         total += price;

         let result = {
             QTY: item.quantity,
             ITEM: item.itemName,
             TOTAL: price.toFixed(2)
         };
         invoice.push(result);
     });
     console.table(invoice, ['QTY', 'ITEM', 'TOTAL']);
     console.log(`Total: ${total}`);
 }
 createInvoice(order);
        
       
        
        
        

    


