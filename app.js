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
const ids = [];

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
                var data = (answers.managerName, answers.managerId, answers.managerEmail, answers.office);
                const manager = new Manager(data);
                members.push(manager);
                ids.push(answers.managerId);
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
                    name: "EngineerEmail"
                },
                {
                    type: "input",
                    message: "Enter Engineer github username: ",
                    name: "github"
                }
            ]).then(function(answers) {
                var data = (answers.engineerName, answers.engineerId, answers.engineerEmail, answers.github);
                const engineer = new Engineer(data);
                members.push(engineer);
                ids.push(answers.engineerId);
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
                    name: "schoool"
                }
            ]).then(function(answers) {
                var data = (answers.internName, answers.internId, answers.internEmail, answers.school);
                const intern = new Intern(data);
                members.push(intern);
                ids.push(answers.internId);
                teamMembers();
            });
    }

    function createTemplates() {
        
        fs.writeFileSync(outputPath, render(members), "utf-8");
        console.log("Successfully created Employee summaries!")
    }

    manager();




    // After the user has input all employees desired, call the `render` function (required
    // above) and pass in an array containing all employee objects; the `render` function will
    // generate and return a block of HTML including templated divs for each employee!

    // After you have your html, you're now ready to create an HTML file using the HTML
    // returned from the `render` function. Now write it to a file named `team.html` in the
    // `output` folder. You can use the variable `outputPath` above target this location.

}


start();



