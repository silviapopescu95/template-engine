// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const inquirer = require("inquirer");

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github; // GitHub username
    }

    getGithub() {
        // Method to get Github username
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Enter engineer's GitHub username: ",
                    name: "username"
                },
            ])
    }

}

module.exports = Engineer;

// const engineer = new Engineer("??");
// engineer.getName();
// engineer.getId();
// engineer.getEmail();
// engineer.getRole();
// engineer.getGithub();