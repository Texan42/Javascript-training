// Promise
// a promise is something that will "eventually" either resolve or be rejected
// third party APIs often use promises
//REST calls/HTTP requests/database calls

//creat a promise

function createPromise(msg) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (msg === 'Error') reject(msg);
            resolve(msg);
        }, 1000)
    })
}

createPromise('Hello World')
.then((msg) => {console.log(msg); throw 'Error'})
.catch((err) => {console.log('Catch number 1'); throw err;})
.then(() => console.log('Then number 2'))
.catch((err) => console.log(err));


Promise.resolve(1)
.then((num) => {
    console.log('Then 1:', num);
    return num + 1;
})
.then((num) =>{
    console.log('Then 2:', num);
    throw num + 1;
})
.catch((num) => {
    console.log('catch 1:', num);
    throw num + 1;
})
.then(() => console.log('I will never run'))
.catch((num) => {
    console.log('End of chain:', num);
})
.finally(() => {
    console.log('I always run');
});


const timedPromise = (time, name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (name === 'instant') reject('No instant promises allowed')
            resolve(`${name} Promise resolved!`);
        }, time);
    })
}

const quickPromise = timedPromise(2000, 'Quick');
const slowPromise = timedPromise(6000, 'Slow');
const instantPromise = timedPromise(0, 'instant');

Promise.all([quickPromise, slowPromise, instantPromise])
.then(([quick, slow, instant]) => {
    console.log(quick, slow, instant)
})
.catch((err) => {
    console.log('inside catch');
    console.log(err);
});