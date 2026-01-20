// Стрелочные функции (ES6+)

// Задача 1
const greetUser = name => `Привет, ${name}!`;

// Задача 2
const max = (a, b) => a > b ? a : b;

// Задача 3
const isEven = number => number % 2 === 0;

// Задача 4
const calculateAverage = numbers => {
    if (numbers.length === 0) return 0;
    return numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
};

// Задача 5
const celsiusToFahrenheit = celsius => celsius * 9/5 + 32;

// Задача 6
const createGreeting = (name, language = 'ru') => {
    const greetings = {
        'ru': `Привет, ${name}!`,
        'en': `Hello, ${name}!`,
        'es': `¡Hola, ${name}!`,
        'fr': `Bonjour, ${name}!`
    };
    return greetings[language] || `Unsupported language: ${language}`;
};

// Задача 7:
console.log("1. greetUser(name):");
console.log("   greetUser('Анна'):", greetUser("Анна"));
console.log("   greetUser('Муртузали'):", greetUser("Муртузали"));
console.log("   greetUser('Гость'):", greetUser("Гость"));

console.log("\n2. max(a, b):");
console.log("   max(5, 10):", max(5, 10));
console.log("   max(-5, -10):", max(-5, -10));
console.log("   max(0, 0):", max(0, 0));
console.log("   max(3.14, 2.71):", max(3.14, 2.71));

console.log("\n3. isEven(number):");
console.log("   isEven(4):", isEven(4));
console.log("   isEven(7):", isEven(7));
console.log("   isEven(0):", isEven(0));
console.log("   isEven(-2):", isEven(-2));
console.log("   isEven(13):", isEven(13));

console.log("\n4. calculateAverage(numbers):");
console.log("   calculateAverage([1, 2, 3, 4, 5]):", calculateAverage([1, 2, 3, 4, 5]));
console.log("   calculateAverage([10, 20, 30, 40]):", calculateAverage([10, 20, 30, 40]));
console.log("   calculateAverage([-5, 0, 5]):", calculateAverage([-5, 0, 5]));
console.log("   calculateAverage([]):", calculateAverage([]));
console.log("   calculateAverage([7]):", calculateAverage([7]));

console.log("\n5. celsiusToFahrenheit(celsius):");
console.log("   celsiusToFahrenheit(0):", celsiusToFahrenheit(0), "°F");
console.log("   celsiusToFahrenheit(100):", celsiusToFahrenheit(100), "°F");
console.log("   celsiusToFahrenheit(25):", celsiusToFahrenheit(25), "°F");
console.log("   celsiusToFahrenheit(-10):", celsiusToFahrenheit(-10), "°F");
console.log("   celsiusToFahrenheit(36.6):", celsiusToFahrenheit(36.6), "°F");

console.log("\n6. createGreeting(name, language):");
console.log("   createGreeting('Иван'):", createGreeting("Иван"));
console.log("   createGreeting('John', 'en'):", createGreeting("John", "en"));
console.log("   createGreeting('Мария', 'ru'):", createGreeting("Мария", "ru"));
console.log("   createGreeting('Pierre', 'fr'):", createGreeting("Pierre", "fr"));
console.log("   createGreeting('Sofia', 'es'):", createGreeting("Sofia", "es"));