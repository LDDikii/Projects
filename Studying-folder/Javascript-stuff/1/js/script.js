'use strict';

// const box = document.getElementById('box');

// console.log(box);

// const btns = document.getElementsByTagName('button'); // Можно выбрать определённый элемент при помощи индекса [x]

// console.log(btns[0]);

// const circles = document.getElementsByClassName('circle');
// console.log(circles);

// const hearts = document.querySelectorAll('.heart');

// hearts.forEach(item => {
//     console.log(item);
// });

// console.log(hearts);

// const oneHeart = document.querySelector('.heart'); // Можно выбрать определённый элемент из css, то есть нужно писать # или .
// console.log(oneHeart);

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    wrapper = document.querySelector('.wrapper'),
    hearts = wrapper.querySelectorAll('.heart'),
    oneHeart = wrapper.querySelector('.heart');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px;';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.background = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут был лис');

div.classList.add('black');

// document.body.append(div);
wrapper.append(div);
// wrapper.appendChild(div);

// wrapper.insertBefore(div, hearts[1]);

// wrapper.prepend(div);

// hearts[0].before(div);

// circles[0].remove();
// wrapper.removeChild(hearts[1]);

// hearts[0]. replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]);

div.innerHTML = "<h1>Hello world</h1>";

// div.textContent = "Hello";

div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');