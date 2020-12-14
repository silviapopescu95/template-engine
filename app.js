const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// Links to output directory, and names the output file "team.html"
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Links to script to render the html
const render = require("./lib/htmlRender");

// Arrays to push team memember info to
const members = [];
// const ids = [];

// function to create a manager, to then create the team
function start() {
    function manager() {
        console.log("Welcome to the Employee Template Engine! Please enter your credentials to begin building a team.");
        // Enter manager information
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Enter manager name: ",
                    name: "managerName"
                },
                {
                    type: "input",
                    message: "Enter manager ID: ",
                    name: "managerId"
                },
                {
                    type: "input",
                    message: "Enter manager email: ",
                    name: "managerEmail"
                },
                {
                    type: "input",
                    message: "Enter manager office number: ",
                    name: "office"
                }
            ]).then(function(answers) {
                console.log(answers);
                const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.office);
                members.push(manager);
                // ids.push(answers.managerId);
                teamMembers();
            });
    }

    function teamMembers() {
        inquirer
            .prompt([
                {
                    type: "list",
                    message: "Choose the role of the team member you'd like to add: ",
                    name: "teamMember",
                    choices: [
                        "Engineer",
                        "Intern",
                        "No more team members to add"
                    ]
                }
            ]).then(function(answers) {
                if (answers.teamMember === "Engineer") {
                    engineer();
                } else if (answers.teamMember === "Intern") {
                    intern();
                } else {
                    createTemplates();
                }
            });
    }

    function engineer() {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Enter Engineer name: ",
                    name: "engineerName"
                },
                {
                    type: "input",
                    message: "Enter Engineer ID: ",
                    name: "engineerId"
                },
                {
                    type: "input",
                    message: "Enter Engineer email: ",
                    name: "engineerEmail"
                },
                {
                    type: "input",
                    message: "Enter Engineer github username: ",
                    name: "github"
                }
            ]).then(function(answers) {
                console.log(answers);
                const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.github);
                members.push(engineer);
                // ids.push(answers.engineerId);
                teamMembers();
            });
    }

    function intern() {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Enter intern name: ",
                    name: "internName"
                },
                {
                    type: "input",
                    message: "Enter intern ID: ",
                    name: "internId"
                },
                {
                    type: "input",
                    message: "Enter intern email: ",
                    name: "internEmail"
                },
                {
                    type: "input",
                    message: "Enter name of Intern school: ",
                    name: "school"
                }
            ]).then(function(answers) {
                console.log(answers);
                const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.school);
                members.push(intern);
                // ids.push(answers.internId);
                teamMembers();
            });
    }

    function createTemplates() {
        
        fs.writeFileSync(outputPath, render(members), "utf-8");
        console.log("Successfully created Employee summaries!")
    }

    manager();
}


start();



