// ===== День 5: Объекты в JavaScript =====

// Задача 1: Создание объекта
const createBook = (title, author, year) => {
    return {
        title,
        author,
        year
    };
};

// Задача 2: Доступ к свойствам
const getBookInfo = book => {
    return `${book.title} (${book.author}, ${book.year})`;
};

// Задача 3: Изменение объекта
const updateBookYear = (book, newYear) => {
    return {
        ...book,
        year: newYear
    };
};

// Задача 4: Добавление метода к объекту
const addRatingToBook = (book, rating) => {
    return {
        ...book,
        rating,
        isHighlyRated: function() {
            return this.rating >= 4;
        }
    };
};

// Задача 5: Перебор свойств объекта
const countProperties = obj => {
    return Object.keys(obj).length;
};

// Задача 6: Объединение объектов
const mergeBooks = (book1, book2) => {
    return {
        ...book1,
        ...book2
    };
};

// Задача 7: Создание объекта библиотеки
const createLibrary = name => {
    return {
        name,
        books: [],
        addBook(book) {
            this.books.push(book);
        },
        findBookByTitle(title) {
            return this.books.find(book => book.title === title);
        },
        getBookCount() {
            return this.books.length;
        }
    };
};

// ===== Тестирование =====

console.log("=== Тестирование задач по объектам ===\n");

console.log("1. createBook(title, author, year):");
const book1 = createBook("JavaScript для начинающих", "Иван Иванов", 2022);
const book2 = createBook("Продвинутый JavaScript", "Петр Петров", 2023);
console.log("   book1:", book1);
console.log("   book2:", book2);

console.log("\n2. getBookInfo(book):");
console.log("   getBookInfo(book1):", getBookInfo(book1));
console.log("   getBookInfo(book2):", getBookInfo(book2));

console.log("\n3. updateBookYear(book, newYear):");
const updatedBook1 = updateBookYear(book1, 2024);
console.log("   Исходный book1:", book1);
console.log("   Обновленный book1:", updatedBook1);
console.log("   Исходный не изменился?", book1.year === 2022);

console.log("\n4. addRatingToBook(book, rating):");
const ratedBook1 = addRatingToBook(book1, 4.5);
console.log("   book1 с рейтингом:", ratedBook1);
console.log("   isHighlyRated():", ratedBook1.isHighlyRated());

console.log("\n5. countProperties(obj):");
console.log("   countProperties({a: 1, b: 2, c: 3}):", countProperties({a: 1, b: 2, c: 3}));
console.log("   countProperties(book1):", countProperties(book1));
console.log("   countProperties({}):", countProperties({}));

console.log("\n6. mergeBooks(book1, book2):");
const mergedBook = mergeBooks(
    {title: "Книга 1", author: "Автор 1"},
    {year: 2023, pages: 300}
);
console.log("   Объединенная книга:", mergedBook);

console.log("\n7. createLibrary(name):");
const library = createLibrary("Моя библиотека");
library.addBook(book1);
library.addBook(book2);
console.log("   Библиотека:", library.name);
console.log("   Количество книг:", library.getBookCount());
console.log("   Поиск 'JavaScript для начинающих':", library.findBookByTitle("JavaScript для начинающих"));
console.log("   Поиск 'Несуществующая книга':", library.findBookByTitle("Несуществующая книга"));

// ===== Дополнительные примеры =====
console.log("\n=== Дополнительные примеры ===");

// Пример 1: Объект с вычисляемым свойством
console.log("\nПример 1: Вычисляемое свойство");
const user = {
    firstName: "Анна",
    lastName: "Смирнова",
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log("   user.fullName:", user.fullName);

// Пример 2: Деструктуризация объекта
console.log("\nПример 2: Деструктуризация");
const {title, author} = book1;
console.log("   const {title, author} = book1;");
console.log("   title:", title);
console.log("   author:", author);

// Пример 3: Массив объектов
console.log("\nПример 3: Массив объектов");
const books = [
    {id: 1, title: "Книга 1", price: 500},
    {id: 2, title: "Книга 2", price: 700},
    {id: 3, title: "Книга 3", price: 300}
];

// Поиск книги по id
const findBookById = (booksArray, id) => {
    return booksArray.find(book => book.id === id);
};

console.log("   Книга с id 2:", findBookById(books, 2));

// Сумма цен всех книг
const totalPrice = books.reduce((sum, book) => sum + book.price, 0);
console.log("   Сумма всех цен:", totalPrice);

console.log("\n=== День 5 завершен! ===");