let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

const billPrinter = function (arr) {
  const arrToPrint = arr.map(function ({ itemName, quantity, unitPrice }) {
    return `${quantity}${" ".repeat(10 - (quantity + "").length)}${itemName}${" ".repeat(20 - itemName.length)}${(quantity * unitPrice).toFixed(2)}`;
    // return quantity + " " * 6 + itemName + " " * 20 + unitPrice;
  });
  return arrToPrint;
};

const totalSum = function (arr) {
  const tot = arr.reduce(
    (acc, { itemName, quantity, unitPrice }) =>
      (acc = acc + unitPrice * quantity),
    0
  );

  return `\nTotal: ${tot};`;
};

const headerCreator = function () {
  return `QTY${" ".repeat(10 - "QTY".length)}ITEM${" ".repeat(
    20 - "ITEM".length
  )}TOTAL`;
};

const printer = function (arr) {
  const arrayToPrint = [headerCreator(), ...billPrinter(arr), totalSum(arr)];
  arrayToPrint.forEach((item) => console.log(item));
};

printer(order);

// const arr2 = billPrinter(order);

// arr2.forEach((item) => console.log(item));
