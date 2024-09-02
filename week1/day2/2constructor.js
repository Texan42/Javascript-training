function Student(firstName, lastName, age, classes) {
    this.firstName= firstName;
    this.lastName = lastName;
    this.age = age;
    this.classes = Array.isArray(classes) ? classes : []; //if it is an array it returns classes, otherwise empty array
}

const jim = new Student('Jim', 'Connors', 33, ['Math', 'Science', 'History']);

console.log(jim);