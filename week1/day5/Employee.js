const Person = require('./Person.js');

class Employee extends Person {
    constructor(name, age) {
        super(name, age);
    }

    speak() {
        console.log('Speak');
    }
}

module.exports = Employee;