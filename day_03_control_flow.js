// Проверка четности числа
let number = 6;

if (number % 2 === 0) {
    console.log(true);
} else {
    console.log(false);
}

// Определение дня недели
let dayNumber = 3;

switch (dayNumber) {
    case 1:
        console.log("Понедельник");
        break;
    case 2:
        console.log("Вторник");
        break;
    case 3:
        console.log("Среда");
        break;
    case 4:
        console.log("Четверг");
        break;
    case 5:
        console.log("Пятница");
        break;
    case 6:
        console.log("Суббота");
        break;
    case 7:
        console.log("Воскресенье");
        break;
    default:
        console.log("Такого дня недели нет. Введите число от 1 до 7");
}

// Использование цикла for
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
// Использование цикла while
let i = 10;
while (i > 0) {
    console.log(i);
    i--;
}

// Использование цикла for для массива

let fruits = ['яблоко', 'груша', 'апельсин'];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}