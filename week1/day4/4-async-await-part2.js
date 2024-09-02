const callDatabase = (url) => {
    if (url === 'http://www.google.com/images/56365232') {
        return {status: 200, image: 'cat'}
    }
    return {status: 404, err: {name: 'Image not found', message: 'unable to locate image'}};
}

const httpCall = async (url) => {
    const data = callDatabase(url);
    if (data.status >= 400) throw data;
    return data;
}

//handles success
function loadDataOnPage(image) {
    console.log(image);
}
//handles error
function displayErrorOnPage(err) {
    console.log(`${err.name}: ${err.message}`);
}

const getData = async (url) => {
    try {
        const {image} = await httpCall(url);  //await = .then
        loadDataOnPage(image)
    } catch (err) {
        displayErrorOnPage(err.err);
    }
}

getData('http://www.google.com/images/56365232');