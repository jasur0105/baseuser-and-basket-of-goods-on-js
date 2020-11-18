const order = receipt()
let product = "";
let sum = 0;
for (const key in order) {
    product += `${key} ${order[key]["info"]}, `
    sum += order[key]["price"]
}
console.log("Вы заказали " + product + ` | Общая стоимость ${sum + 9000} сумм с доставкой (9000)`);
console.log(order);