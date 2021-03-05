 
let order = [
     { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29},
     { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39},
     { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.80},
     { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.00},
     { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.00},
     { itemName: "Hash Brown", quantity: 4, unitPrice: 0.40}
]
 
let { itemName, quantity, unitPrice } = order;
 
function orderReceipt(obj) {
    let total = 0;
    let result = [];
    obj.forEach((el ) => {
        const price = el.unitPrice * el.quantity;
        total += price;
        const temp = {
            QTY: el.quantity,
            ITEM: el.itemName,
            TOTAL: price.toFixed( 2 ),
        };
        result.push( temp );
        
    } );
    console.log( result, ['qty', 'itm', 'Total'] );
    console.log( `\ntotal:${ total }` );
}
orderReceipt( order );