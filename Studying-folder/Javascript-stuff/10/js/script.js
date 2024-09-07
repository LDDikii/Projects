'use strict';

const box = document.querySelector('.box');
const btn = document.querySelector('button');

// const width = box.clientWidth;
// const height = box.clientHeight;

// const width = box.offsetWidth;
// const height = box.offsetHeight;

const width = box.scrollWidth;
const height = box.scrollHeight;

console.log(width, height);

btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + 'px';
    console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect().top);

const style = window.getComputedStyle(box);

console.log(style);

console.log(document.documentElement.clientWidth);

//Можно сделать кнопку перемещения страницы в самый вверх при помощи document.documentElement.scrollTop = 0
// window.scrollBy() листает страницу от текущей позиции
// window.scrollTo()