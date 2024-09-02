// IO -> input/output

const fs = require('fs'); //file system
//const path = require('path'); //file path system
const {resolve} = require('path'); //spefic thing in path that Sean wants
const {promisify} = require('util');

const readFileES6 = promisify(fs.readFile); //makes promises

// absolute vs relative paths
// absolute = C://Users/Sam/Skillstorm/*/7-file-IO.js
// relative = ./7-file-IO.js

// asynchronous file reading
fs.readFile(resolve('lorem.txt'), 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

// synchronous file reading
try {
    const fileContents = fs.readFileSync(resolve('lorem.txt'), 'utf-8');
    console.log(fileContents);
} catch (err) {
    console.error(err);
}

//reading file with using promisify
const parseFile = async (filePath) => {
    try {
        const data = await readFileES6(filePath, 'utf-8');
        return {status: 200, data: data.split(' ')};
    } catch (err) {
    return {status: 404, data: err.message}        
    }
}

parseFile(resolve('lorem.txt')).then(res => console.log(res));

// writing to a file
const text = ['Hello World', 'Today is a day', 'I went to the store and bought stuff'];

text.forEach((sentence) => {
    fs.appendFile(resolve('myDay.txt'), `${sentence}\n`, (err) => {
        if (err) console.error(err);
        console.log('Wrote to file!');
    })
})