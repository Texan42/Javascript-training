function callDatabase(url) {
    if (url === 'http://www.google.com/images/56365232') {
        return {status: 200, image: 'cat'}
    }
    return {status: 404, err: {name: 'Image not found', message: 'unable to locate image'}};
}

function httpCall(url) {
    const data = callDatabase(url);
    return new Promise((resolve, reject) => {
        if (data.status > 400) {
            reject(data);
        }
        resolve(data);
    })
}
//handles success
function loadDataOnPage(image) {
    console.log(image);
}
//handles error
function displayErrorOnPage(err) {
    console.log(`${err.name}: ${err.message}`);
}

httpCall('http://www.google.com/images/56365232') //returns a promise
.then(({image}) => {
    loadDataOnPage(image); //loads the image onto the page, resolves promise
})
.catch(err => {
    displayErrorOnPage(err.err); // rejects promise
})