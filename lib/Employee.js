// TODO: Write code to define and export the Employee class
const inquirer = require("inquirer");

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Enter employee name: ",
                    name: "name"
                },
            ])
            .then(function(response) {
                return `${response.name}`;
            });
    }

    getId() {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Enter employee ID: ",
                    name: "id"
                },
            ])
            .then(function(response) {
                return `${response.id}`;
            });
    }

    getEmail() {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Enter employee email address: ",
                    name: "email"
                },
            ])
            .then(function(response) {
                return `${response.email}`;
            });
    }

    getRole() {
        // Should return "Employee"
        inquirer
        .prompt([
                {
                    type: "list",
                    message: "Choose the correct job title from the list below: ",
                    name: "role",
                    choices: [
                        "Manager",
                        "Engineer",
                        "Intern"
                    ]
                },
            ])
        .then(function(response) {
            return `${response.role}`;
        });
        // .then(function(response) {
        //     const employee = new Employee();
        //     employee = return `${response.role}`;
        // });
    }

}

module.exports = Employee;

// const employee = new Employee;
// employee.getName();
// employee.getId();
// employee.getEmail();
// employee.getRole();