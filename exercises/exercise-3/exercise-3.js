let order = [
    { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
    { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
    { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.80 },
    { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.00 },
    { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.00 },
    { itemName: "Hash Brown", quantity: 4, unitPrice: 0.40 }
]

const [itemName, quantity, unitPrice] = order;

function makeReceipt(object) {
    let total = 0;
    let result = [];

    object.forEach((elem) => {
        const price = elem.unitPrice * elem.quantity;
        total += price;
        const receipt = {
            QTY: elem.quantity,
            Item: elem.itemName,
            Total: price.toFixed(2),
        }
        result.push(receipt);
    })

    console.table(result, ['QTY', 'Item', 'Total']);
    console.log(`Total: ${total}`);
};

makeReceipt(order);
