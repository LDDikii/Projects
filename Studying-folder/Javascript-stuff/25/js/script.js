// try {
//     console.log('Normal');
//     console.log(e);
//     console.log('result');
// } catch(error) {
//     console.log(error);
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// } finally {

// }

// console.log('Still normal');

try {
    document.querySelector('.active').addEventListener('event', () => {
        console.log('click');
    });
} catch(e) {
    console.log(e);
}

console.log('normal');