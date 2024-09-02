// Asynchronous functions in JS
// Async keyword auto returns a promise

const asyncFunction = async (message) => {
    return message
}

// async function asyncFunction2() {

// }

asyncFunction().then((data) => console.log(data)).catch((err) => console.error(err));

const asyncWithAwait = async () => {
const message = await asyncFunction('with await');
console.log(message);
return message;
}

asyncWithAwait().then(data => console.log(data));



const asyncWithError = async (num, message) => {
    if (num < 0) throw 'Number must be greater than 0'; //throw = promise.reject
    return message;
}

const tryCatch = async () => {
    try {
        let response = asyncWithError(4, 'Response 1');
        let response2 = asyncWithError(1, 'Response 2');
        const responseAll = await Promise.all([response, response2]);
        return[response, response2];
    } catch (err) {
        console.error(err);
        return (err);
    }
}

tryCatch().then(data => console.log(data));