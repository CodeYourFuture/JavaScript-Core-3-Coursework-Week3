let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

// const order2 = [itemName, quantity, unitPrice];

function takeoutItems(order) {
  let total = 0;
  let result = [];

  order.forEach(({ itemName, quantity, unitPrice } = orderItem) => {
    // console.log(itemName);
    const price = unitPrice * quantity;
    total += price;

    const receipt = {
      Quantity: quantity,
      Name: itemName,
      Total: price.toFixed(2),
    };

    result.push(receipt);

    console.log(
      `The item I want is ${itemName}. The quantity I need is ${quantity} and it costs £${unitPrice}.);`
    );
  });
  console.log(`Total Price: ${total}`);
}
takeoutItems(order);
