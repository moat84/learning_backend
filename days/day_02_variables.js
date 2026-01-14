let company = "Пятерочка";
const STORE_TYPE = "супермаркет";
let item = "Яблоко";
let price = 150;
let isFresh = true;

let quantity = 5;
let totalCost = price * quantity;
let discount = totalCost * 0.1;
let finalPrice = totalCost - discount;

let purchaseInfo = item + " в " + company + ": " + price + " руб.";
let receipt = `Итого: ${finalPrice} рублей (со скидкой 10%)`;

const DEBUG_MODE = false;

if (DEBUG_MODE) {
    console.log("=== Проверка типов ===");
    console.log(typeof company);
    console.log(typeof price);
    console.log(typeof isFresh);
    console.log(typeof quantity);
}

console.log("\n=== Информация о покупке ===");
console.log(purchaseInfo);
console.log(receipt);
console.log("Количество:", quantity);
console.log("Свежесть товара:", isFresh);