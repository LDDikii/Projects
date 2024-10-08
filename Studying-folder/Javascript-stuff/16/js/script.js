// console.log('Запрос данных..');

// const req = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log('Подготовка данных..')
    
//         const product = {
//             name: 'TV',
//             price: 2000
//         }
        
//         resolve(product);
//     }, 2000);
// });

// req.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order'
//             resolve(product);
//             // console.log(product);
//         },2000);
//     });
// }).then(data => {
//     data.modify = true;
//     return data;
// }).then(() => {
//     console.log(data);
// }).catch(() => {
//     console.error('Произошла ошибка');
// }).finally(() => {
//     console.log('Finally');
// })

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

// test(1000).then(() => console.log('1000ms'));
// test(2000).then(() => console.log('2000ms'));

// Promise.all([test(1000), test(2000)]).then(() => {   Выполняется когда выполняются все обещания
//     console.log('All')
// });

Promise.race([test(1000), test(2000)]).then(() => { // Выполняется когда выполняется самое первое обещание
    console.log('All')
});