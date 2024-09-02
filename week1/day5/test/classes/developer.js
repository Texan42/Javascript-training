const Employee = require('./Employee.js');

class Developer extends Employee {

    #languages; //# makes variable private

    constructor(id, name, company, languages) {
        super(id, name, company);
        this.#languages = Array.isArray(languages) ? languages : [];
    }

    get languages() {
        return this.#languages;
    }

    // learn(language) {
    //     this.#languages.push(language);
    // }

    // forget(language) {
    //     this.#languages = this.#languages.filter(lang => lang !== language);
    // }
}

module.exports = Developer;