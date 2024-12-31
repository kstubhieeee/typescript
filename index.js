const menu = [
  {
    name: "Margherita",
    price: 8,
  },
  {
    name: "Italian",
    price: 9,
  },
  {
    name: "Cheese",
    price: 10,
  },
  {
    name: "Hawaiian",
    price: 11,
  },
];

let cashInRegister = 100;

const orderQueue = [];

let nextOrderId = 0;

function addNewPizza(pizzaObj) {
  menu.push(pizzaObj);
}

function placeOrder(pizzaName) {
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
  cashInRegister += selectedPizza.price;
  const newOrder = {
    id: nextOrderId++,
    pizza: selectedPizza,
    status: "ordered",
  };
  orderQueue.push(newOrder);
  return newOrder;
}

function completeOrder(orderId) {
  const matchedOrder = orderQueue.find((order) => order.id === orderId);
  matchedOrder.status = "completed";
  return matchedOrder;
}

addNewPizza({ name: "Chicken Bacon Ranch", cost: 13 });
addNewPizza({ name: "BBQ Chicken", cost: 12 });
addNewPizza({ name: "Spicy Sausage", cost: 11 });

placeOrder("Chicken Bacon Ranch");
completeOrder(1);

console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);
