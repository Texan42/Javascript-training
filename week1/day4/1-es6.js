// Spread operator
// ...
// spreads iterable objects (fan out)
// spread objects

let obj = {
    name: 'Trevor',
    age: 17,
    hair: 'black',
    friends: ['mary', 'sure', 'john', 'justin']
}

console.log(obj);

obj = {...obj, favColor: 'purple'};

console.log(obj);

// iterables

const string = 'Hello World!';

console.log(...string); // console.log('H', 'e', ....)

const strArr = [...string];

console.log(...strArr);


function restOperator(...arr) {
    console.log(arr);
}

restOperator(1, 2, 3, 4, 5);

// Arrow functions
// anonymous function

console.log(function(){});
console.log(
    () => {}
);

const arrow = () => {};
console.log(arrow);

const fn = () => {};
const fn2 = a => a;
const fn3 = (a) => {return a;};
const fn4 = (a) => a;
const fn5 = (a, b) => {return a + b};

console.log(fn5(1, 2));

// object destructuring

const destructure = (arr) => {
    return arr;
};

[a, b, ...rest] = destructure(['A', 'B', 'C', 'D', 'E', 'F']);

console.log(a, b, rest);

const student = {
    firstName: 'Rachel',
    age: 28,
    school: 'UNT'
};

const {firstName, school} = student;

console.log(firstName, school);

class Plane{
    constructor({company, seats, windows, location}){
        this, company = company;
        this.seats = seats;
        this.windows = windows;
        this.location = location;
    }
}

const plane = new Plane({windows: 20, company: 'Delta', location: 'Charlotte', seats: 60});

console.log(plane.location);

const aa = new Plane({company: 'American Airlines', windows: 10, seats: 30, location: 'NYC'});

const planes = [plane, new Plane({}), new Plane({location: 'Dallas'}), aa, plane];
console.log(planes);