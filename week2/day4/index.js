function displayText() {
    const elem = document.getElementById('first-name-label');
    elem.style.visibility = 'visible';
}

function hideText() {
    const elem = document.getElementById('first-name-label');
    elem.style.visibility = 'hidden';
}

function handleSubmit() {
    const data = document.getElementById('data');
    const firstName = document.getElementById('first-name');
    console.log(data);
    console.log(firstName.value);
    // Takes the element and sets its children HTML to the value specified
    // data.innerHTML = firstName.value;
    // eval(firstName.value);
    // <input type="text" value="<script>console.log('Hacker');</script>"
    data.innerText = firstName.value;
}

function renderDataDiv() {

}

// Mocks getting data from backend
function parseData(data) { // {name: '', age: 0}
    const string = `
    <div>
        ${data.name}
    </div>
    <div>
        ${data.age}
    </div>
    `;
    document.getElementById('data').innerHTML = string;
}

function createDiv() {
    const data = document.getElementById('data');
    const location = document.createElement("div"); // Holds city and state divs
    const city = document.createElement('div'); // city div
    const state = document.createElement('div'); // state div
    city.innerText = 'Memphis';
    state.innerText = 'Tennessee';
    location.appendChild(city);
    location.appendChild(state);
    data.appendChild(location);
}

function changeColor() {
    const blackBoxes = document.getElementsByClassName('black-box');
    console.log(blackBoxes);
    for (blackBox of blackBoxes) {
        blackBox.style.backgroundColor = 'blue';
        blackBox.innerHTML = NaN;
    }
}

window.addEventListener('DOMContentLoaded', () => {
    console.log('Page is loaded!');
    parseData({name: 'Jerry', age: 53});
    // const data = document.getElementsByClassName('form-group');
    // const data = document.querySelectorAll('.form-group');
    // for (datum of data) {
    //     console.log(datum);
    //     datum.innerHTML = '<img src="https://i.guim.co.uk/img/media/684c9d087dab923db1ce4057903f03293b07deac/205_132_1915_1150/master/1915.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=14a95b5026c1567b823629ba35c40aa0">';
    // }
});