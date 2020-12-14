const Employee = require("./Employee");

// Defines the Intern class
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        // Overridden to return 'Intern'
        return "Intern";
      }

}


// Exports the Intern class
module.exports = Intern;
