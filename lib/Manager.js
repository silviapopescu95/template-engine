// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const inquirer = require("inquirer");

const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        // Method to get intern's school
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Enter your office number: ",
                    name: "office"
                },
            ])
            .then(function(response) {
                return `${response.office}`;
            });
    }

}

module.exports = Manager;

// const manager = new Manager(314);
// manager.getName();
// manager.getId();
// manager.getEmail();
// manager.getRole();
// manager.getOfficeNumber();
