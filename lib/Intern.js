// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const inquirer = require("inquirer");

const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        // Method to get intern's school
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Enter the name of intern's school: ",
                    name: "school"
                },
            ])
            .then(function(response) {
                return `${response.school}`;
            });
    }

}

module.exports = Intern;

// const intern = new Intern("??");
// intern.getName();
// intern.getId();
// intern.getEmail();
// intern.getRole();
// intern.getSchool();