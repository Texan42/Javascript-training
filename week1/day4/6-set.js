// Set
// Only unique values for keys
// insertion order stays the same
// iterable
// set is just the value

const set = new Set();

console.log(set);

set.add(1);
set.add('1');
set.add(1); //overwrites previous equal value
set.add({});
set.add([]);
set.add(() => {});

console.log(set);

set.delete('1');

console.log(set);

set.clear();

console.log(set);