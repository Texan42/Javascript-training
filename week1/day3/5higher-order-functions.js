//function that takes a function as a parameter or returns a function (HOC's)

function forX(x) {
    return function(action) {
        for(let i = 0; i < x; i++) {
            action(i, x);
        }
    }
}

const for10 = forX(10);

function act(val, x) {
    console.log(val * x);
}

function act2(val, x) {
    console.log(val / x);
}

for10(act);
for10(act2);

/*HOC arrays

forEach
map
filter
reduce
*/

const planets = ['Mercury', 'Venus', 'Earth', 'Mars'];

planets.forEach(function(value, index, arr) {
    console.log(value, index, arr);
});

//map returns a new array changed by the provided procedure

const geocentric = planets.map(function(planet) {
    return planet.toUpperCase();
});

console.log(geocentric);

//filter filters out any element that doesn't meet a condition
// anything that returns true is added to new array

const num = [6, 2, 8, 7, 4, 3, 0];

const filteredNums = num.filter(function(num){
    return num > 5;
});

console.log(filteredNums);

//reduce reduces to a single value based on an accumulated total that we alter each iteration

const sum = num.reduce((acc, num) => num + acc); //pointer function, equivalent { return num + acc; }

console.log(sum);