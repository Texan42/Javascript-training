// const obj = {}; __proto__ points to object.prototype

function Employee(firstName, lastName, id) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
}

function Manager(firstName, lastName, id, employees) {
    Employee.call(this, firstName, lastName, id);
    
    this.employees = Array.isArray(employees) ? employees : [];

    this.addEmployee = function(employee) {
        this.employees.push(employee);
    }
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Employee;

const frank = new Manager('Frank', 'Casey', 1, 2);

frank.addEmployee('Sarah');

console.log(frank);