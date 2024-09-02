// map is a key value pair
// key -> value
// maps can be any type, including objects or arrays
// iterable by default
// maps come with no keys by default

//creat a map

const map = new Map();
console.log(map);
map.set(1, 'uno');
map.set('1', 1); //if key is the same, value will update
console.log(map);

console.log(map.get(1));

map.delete('1');

console.log(map);

console.log(map.has(1));



map.clear();

console.log(map.size);
console.log(map);