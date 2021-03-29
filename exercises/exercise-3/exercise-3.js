let order = [
    { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
    { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
    { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.80 },
    { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.00 },
    { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.00 },
    { itemName: "Hash Brown", quantity: 4, unitPrice: 0.40 }
]

function receipt(order) {
    console.log("QTY\t ITEM\t\t\t\tTOTAL");
    order.forEach(item => {
        let { quantity, itemName, unitPrice } = item;
        console.log(`${quantity}\t ${itemName.padEnd(18)} £${(unitPrice * quantity).toFixed(2)}`);
    })
}

receipt(order);