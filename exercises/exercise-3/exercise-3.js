 let order = [
     { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29},
     { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39},
     { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.80},
     { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.00},
     { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.00},
     { itemName: "Hash Brown", quantity: 4, unitPrice: 0.40}
 ]
 

 /*
- In `exercise-3.js`, you have been provided with a takeout order. Write a program that will print out the receipt for this order.
- Log each individual item to the console.
- Log the total cost of the order to the console.

 */

let { itemName, quantity, unitPrice} = order;


function createReceiptOrder(order){
    console.log(`QTY   ITEM              TOTAL`)
    let total = 0
    order.forEach(element => {
        total += element.quantity * element.unitPrice;
        console.log(
       `${element.quantity}     ${element.itemName}           ${(
         element.quantity * element.unitPrice
       ).toFixed(2)}`
     );
    });
    console.log(`\nTOTAL: ${total}`);
}

createReceiptOrder(order)

