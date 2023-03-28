// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [

    // Title
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },

    // Description
    {
        type: "input",
        name: "description",
        message: "Please enter a description of your project:",
    },

    // Installation
    {
        type: "input",
        name: "installation",
        message: "Please enter an explanation how to install the software, or commands for the program:",
    },

    // Use
    {
        type: "input",
        name: "usage",
        message: "Please describe how we can use this program/project:",
    },

    // Licensing
    {
        type: "list",
        name: "license",
        message: "Please select a license for this project.",
        choices: ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Apache 2.0", "Boost Software 1.0", "MIT", "Mozilla"],
    },

    // Contributions
    {
        type: "input",
        name: "contributing",
        message: "How can users contribute to your project:",
    },

    // Question for Tests
    {
        type: "input",
        name: "tests",
        message: "Please enter any testing instructions you would like to provide for this project:",
    },

    // GitHub Username
    {
        type: "input",
        name: "userName",
        message: "What is your GitHub username?",
    },

    // GitHub email address
    {
        type: "input",
        name: "userEmail",
        message: "What is your GitHub email address so that contributors may contact you?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((inquirerResponses) => {
        console.log('Generating custom README...');
        writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
      })
        .catch(err => console.log(err));    
}

// Function call to initialize app
init();
