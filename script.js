const obj = {}
for (let i = 1; i <= 3; i++) {
    obj[i] = {
        name: prompt('Введите имя'),
        age: +prompt('Введите возраст')
    }
}

for (const key in obj) {
    console.log(`Пользователь ${key}
    Имя ${obj[key]["name"]}
    Возраст ${obj[key]["age"]}`);
}
console.log(obj);