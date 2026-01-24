// day6_arrays_of_objects.js
// Массивы объектов - основа работы с данными в JavaScript

console.log('=== День 6: Массивы объектов ===\n');

// ===== ЧАСТЬ 1: БАЗОВЫЕ ОПЕРАЦИИ =====
console.log('=== Часть 1: Базовые операции с массивами объектов ===\n');

// 1. Создание массива объектов (типичные данные бэкенда)
const users = [
    { id: 1, name: 'Анна', email: 'anna@example.com', age: 25, isActive: true },
    { id: 2, name: 'Иван', email: 'ivan@example.com', age: 30, isActive: true },
    { id: 3, name: 'Мария', email: 'maria@example.com', age: 22, isActive: false },
    { id: 4, name: 'Алексей', email: 'alex@example.com', age: 35, isActive: true },
    { id: 5, name: 'Ольга', email: 'olga@example.com', age: 28, isActive: false }
];

console.log('1. Исходный массив пользователей:');
console.log(users);

// 2. Поиск объекта по ID (частая операция в бэкенде)
const findUserById = (id) => {
    return users.find(user => user.id === id);
};

console.log('\n2. Поиск пользователя по ID:');
console.log('   Пользователь с id=3:', findUserById(3));
console.log('   Пользователь с id=99:', findUserById(99)); // undefined

// 3. Фильтрация активных пользователей
const activeUsers = users.filter(user => user.isActive);
const inactiveUsers = users.filter(user => !user.isActive);

console.log('\n3. Фильтрация пользователей:');
console.log('   Активные пользователи:', activeUsers.length);
console.log('   Неактивные пользователи:', inactiveUsers.length);

// 4. Получение массива только имен (проекция)
const userNames = users.map(user => user.name);
const userEmails = users.map(user => user.email);

console.log('\n4. Проекция (получение отдельных полей):');
console.log('   Имена всех пользователей:', userNames);
console.log('   Email всех пользователей:', userEmails);

// ===== ЧАСТЬ 2: СЛОЖНЫЕ ПРЕОБРАЗОВАНИЯ =====
console.log('\n=== Часть 2: Сложные преобразования данных ===\n');

// 5. Группировка по возрасту (молодые/взрослые)
const ageGroups = users.reduce((groups, user) => {
    const group = user.age < 30 ? 'молодые' : 'взрослые';
    if (!groups[group]) {
        groups[group] = [];
    }
    groups[group].push(user);
    return groups;
}, {});

console.log('5. Группировка пользователей по возрасту:');
console.log('   Молодые (<30 лет):', ageGroups['молодые']?.length || 0, 'человек');
console.log('   Взрослые (≥30 лет):', ageGroups['взрослые']?.length || 0, 'человек');

// 6. Сортировка по возрасту (от младшего к старшему)
const sortedByAge = [...users].sort((a, b) => a.age - b.age);
const sortedByName = [...users].sort((a, b) => a.name.localeCompare(b.name));

console.log('\n6. Сортировка пользователей:');
console.log('   По возрасту (младшие первыми):');
sortedByAge.forEach(user => console.log(`     ${user.name} - ${user.age} лет`));

console.log('\n   По имени (алфавитный порядок):');
sortedByName.forEach(user => console.log(`     ${user.name}`));

// 7. Расчет статистики
const stats = users.reduce((acc, user) => {
    acc.totalAge += user.age;
    acc.activeCount += user.isActive ? 1 : 0;
    if (user.age > acc.oldest.age) {
        acc.oldest = user;
    }
    if (user.age < acc.youngest.age) {
        acc.youngest = user;
    }
    return acc;
}, {
    totalAge: 0,
    activeCount: 0,
    oldest: { age: -Infinity },
    youngest: { age: Infinity }
});

const averageAge = stats.totalAge / users.length;

console.log('\n7. Статистика по пользователям:');
console.log(`   Средний возраст: ${averageAge.toFixed(1)} лет`);
console.log(`   Активных пользователей: ${stats.activeCount} из ${users.length}`);
console.log(`   Самый старший: ${stats.oldest.name} (${stats.oldest.age} лет)`);
console.log(`   Самый младший: ${stats.youngest.name} (${stats.youngest.age} лет)`);

// ===== ЧАСТЬ 3: РЕАЛЬНЫЕ ПРИМЕРЫ ИЗ БЭКЕНДА =====
console.log('\n=== Часть 3: Реальные примеры из бэкенд-разработки ===\n');

// 8. Данные заказов (типичная структура в e-commerce)
const orders = [
    { orderId: 'ORD-001', userId: 1, amount: 5000, status: 'completed', date: '2024-01-15' },
    { orderId: 'ORD-002', userId: 2, amount: 7500, status: 'pending', date: '2024-01-16' },
    { orderId: 'ORD-003', userId: 1, amount: 3000, status: 'completed', date: '2024-01-17' },
    { orderId: 'ORD-004', userId: 3, amount: 12000, status: 'shipped', date: '2024-01-18' },
    { orderId: 'ORD-005', userId: 2, amount: 2500, status: 'completed', date: '2024-01-19' }
];

// 8.1. Сумма всех заказов по пользователю
const userTotalSpent = orders.reduce((spent, order) => {
    if (!spent[order.userId]) {
        spent[order.userId] = 0;
    }
    spent[order.userId] += order.amount;
    return spent;
}, {});

console.log('8. Сумма заказов по пользователям:');
Object.entries(userTotalSpent).forEach(([userId, total]) => {
    console.log(`   Пользователь ${userId}: ${total} руб.`);
});

// 8.2. Количество заказов по статусам
const ordersByStatus = orders.reduce((statusCount, order) => {
    statusCount[order.status] = (statusCount[order.status] || 0) + 1;
    return statusCount;
}, {});

console.log('\n9. Статистика заказов по статусам:');
Object.entries(ordersByStatus).forEach(([status, count]) => {
    console.log(`   ${status}: ${count} заказ(ов)`);
});

// 9. Связывание данных (join) - как в SQL
console.log('\n10. Связывание пользователей с их заказами (аналог SQL JOIN):');

const usersWithOrders = users.map(user => {
    const userOrders = orders.filter(order => order.userId === user.id);
    return {
        ...user,
        orders: userOrders,
        totalOrders: userOrders.length,
        totalSpent: userOrders.reduce((sum, order) => sum + order.amount, 0)
    };
});

usersWithOrders.forEach(user => {
    if (user.totalOrders > 0) {
        console.log(`   ${user.name}: ${user.totalOrders} заказ(ов) на сумму ${user.totalSpent} руб.`);
    }
});

// 10. Форматирование данных для API ответа (очень важный навык!)
console.log('\n11. Форматирование данных для API (типичный ответ бэкенда):');

const formattedUsers = users.map(user => ({
    id: user.id,
    fullName: user.name,
    contact: user.email,
    age: user.age,
    status: user.isActive ? 'active' : 'inactive',
    metadata: {
        createdAt: '2024-01-01',
        updatedAt: '2024-01-20'
    }
}));

console.log('Форматированные данные пользователей (первые 2):');
console.log(JSON.stringify(formattedUsers.slice(0, 2), null, 2));

// ===== ЧАСТЬ 4: ПРАКТИЧЕСКИЕ ЗАДАЧИ =====
console.log('\n=== Часть 4: Практические задачи для закрепления ===\n');

// Задача 1: Найти самого активного покупателя
const topCustomer = usersWithOrders.reduce((top, user) => {
    return user.totalSpent > top.totalSpent ? user : top;
}, { totalSpent: 0 });

console.log('Задача 1: Самый активный покупатель');
console.log(`   ${topCustomer.name} потратил ${topCustomer.totalSpent} руб.`);

// Задача 2: Создать отчет по дням
const ordersByDate = orders.reduce((report, order) => {
    if (!report[order.date]) {
        report[order.date] = { orders: 0, revenue: 0 };
    }
    report[order.date].orders++;
    report[order.date].revenue += order.amount;
    return report;
}, {});

console.log('\nЗадача 2: Отчет по дням:');
Object.entries(ordersByDate).forEach(([date, data]) => {
    console.log(`   ${date}: ${data.orders} заказ(ов), выручка ${data.revenue} руб.`);
});

// Задача 3: Обновление данных (иммитация PATCH запроса)
const updatedUsers = users.map(user => 
    user.id === 2 
        ? { ...user, name: 'Иван Обновленный', age: 31 } 
        : user
);

console.log('\nЗадача 3: Обновление пользователя с id=2:');
console.log('   Обновленное имя:', updatedUsers.find(u => u.id === 2)?.name);

// ===== ИТОГИ =====
console.log('\n=== Итоги дня ===');
console.log('✅ Изучены ключевые операции с массивами объектов:');
console.log('   - Поиск и фильтрация объектов');
console.log('   - Преобразование и сортировка данных');
console.log('   - Группировка и агрегация (как в SQL)');
console.log('   - Связывание данных (аналог JOIN)');
console.log('   - Форматирование для API ответов');
console.log('\n💡 Эти навыки критичны для бэкенд-разработки!');
console.log('   Фактически, это основа работы с данными в Node.js/Express.');

console.log('\n=== День 6 завершен! ===');