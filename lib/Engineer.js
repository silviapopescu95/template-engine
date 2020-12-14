const Employee = require("./Employee");

// Defines the Engineer class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github; 
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        // Overridden to return 'Engineer'
        return "Engineer"
    }
}

// Exports the Engineer class
module.exports = Engineer;
