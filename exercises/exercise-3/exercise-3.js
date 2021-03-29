 let order = [
     { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29},
     { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39},
     { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.80},
     { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.00},
     { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.00},
     { itemName: "Hash Brown", quantity: 4, unitPrice: 0.40}
 ]
 
 let [a,b,c,d,e,f] = order;
 let sum = 0;
 function printitems(object){
    sum += object.unitPrice * object.quantity
    console.log(`${object.quantity}      ${object.itemName}       ${(object.unitPrice * object.quantity).toFixed(2)}`);
 }



 console.log("QTY    ITEM          TOTAL");
 printitems(a)
 printitems(b)
 printitems(c)
 printitems(d)
 printitems(e)
 printitems(f)
console.log("-----------------------------------------")
 console.log("Total:" + sum);