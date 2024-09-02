const btns = document.querySelectorAll('button');
const wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0));
// console.log(btns[0].classList.add('red, trtrdawdawdawd'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));

// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }

btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red')
    // } else {
    //     btns[1].classList.remove('remove');
    // }

    btns[1].classList.toggle('red');
});

// console.log(btns[0].className);

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.tagName == 'BUTTON') { //event.taget.classList.contains('blue') /// event.taget.classList.matches('button.red')
        console.log('hello');
    }
})

// btns.forEach(btn => {
//     btn.addEventListener('click', () => {    Не правильно
//         console.log('Heya');
//     })
// })

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);