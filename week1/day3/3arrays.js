let fruits = ['apple', 'pear', 'mango', 'orange'];

console.log(fruits.toString());

//removes last value in array
const orange = fruits.pop();
fruits.push(orange);
fruits.pop();

console.log(fruits.toString());

//remove an element from front
const apple = fruits.shift();

console.log(fruits.toString());

//add to front of array
fruits.unshift(orange);
fruits.push(apple);
console.log(fruits);

//array access
console.log(fruits[0]);

let games = ['AC', 'COD', 'Battlefield', 'Black Mesa'];

//delete specific element
console.log(games.splice(0, 1));
console.log(games);

const index = games.indexOf('Battlefield');
games.splice(index, 1);
console.log(games);

//copying arrays
//shallow copy is copying parts of the array
const shallowCopy = games.slice();
console.log(shallowCopy);

//deep copy is copying the entire array
const deepCopy = games;
console.log(deepCopy);