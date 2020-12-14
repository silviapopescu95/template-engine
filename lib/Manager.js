const Employee = require("./Employee");

// Defines the Manager class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
       return this.officeNumber;
    }

    getRole() {
        // Overridden to return 'Manager'
        return "Manager"
    }
}

// Exports the Manager class
module.exports = Manager;

