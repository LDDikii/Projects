const person = {
    name: 'Alex',
    tel: '+73134513',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

console.log(JSON.parse(JSON.stringify(person))); //stringify для отправки на сервер, parse для получения с сервера

const clone = JSON.parse(JSON.stringify(person)); //Глубокий клон
clone.parents = 'Ann';
console.log(person);
console.log(clone);