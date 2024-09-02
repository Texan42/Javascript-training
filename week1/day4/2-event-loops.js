setTimeout(() => {
    console.log('Hello from timeout');
}, 1000); //added to event queue / 1000 = 1 second

console.log('Hello 2');

setTimeout(() => {
    console.log('Timeout 2');
}, 0);

Promise.resolve(true).then(() => console.log('Promise Hello')); // Promises get special priority in event queue

console.log('Final Hello');