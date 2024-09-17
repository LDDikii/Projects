// new RegExp('pattern','flags');

// /pattern/f

// const ans = prompt('Введите ваше имя');

// const reg = /\d/g;;
// console.log(reg.match(reg));
// i, g, m

const str = 'My name is R2D2';

console.log(str.match(/\w\d\w\d/i));

///// Анти классы - НЕ
// \D
// \W

/// classes
// \d Все числа
// \w Все буквы
// \s Все пробелы

// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = promt('Passwod');

// console.log(pass.replace(/./g, "*"))
// console.log('12-34-56'.replace(/-/g, ':'));