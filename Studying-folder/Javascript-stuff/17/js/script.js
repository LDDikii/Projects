// метод forEach не возвращает новый массив, он переберает старый, остальные методы возвращают новый массив

/////// filter

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemort'];

// const shotNames = names.filter(function(name) {
//     return name.length < 5;
// });

// console.log(shotNames);

/////// map

// let answers = ['IvAn','AnnA', 'Hello'];
// answers = answers.map(item => item.toLowerCase());

// const result = answers.map(item => item.toLowerCase());

// console.log(result);

////// Every/some - boolean

// const some = [4, 'qdawd', 'dawdwad'];

// console.log(some.some(item => typeof(item) === 'number')); Возвращает true если хотя бы один элемент подходит под условие

// console.log(some.every(item => typeof(item) === 'number')); // Возвращает true если все элементы подходят под условие

////// Reduce

// const arr = [4, 5, 1, 3, 2, 6];

// const res = arr.reduce((sum, current) => sum + current);
// console.log(res);

const arr = ['apple', 'pear', 'plum'];

const res = arr.reduce((sum, current) => `${sum}, ${current}`);
console.log(res);