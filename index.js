// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {   // TITLE
        type: 'input',
        name: 'title',
        message: 'Project Title?', 
    },   
    {   // DESCRIPTION
        type: 'input',
        name: 'desc',
        message: 'Project Description?', 
    },   
    {   // INSTALL INSTRUCTIONS
        type: 'input',
        name: 'install',
        message: 'Command to install dependencies?',
        default: 'npm i',
    },
    {   // USAGE INFO   
        type: 'input',
        name: 'usage',
        message: 'Usage info for user?',
    },
    {   // CONTRI GUIDELINES
        type: 'input',
        name: 'contrib',
        message: 'Contribution info for user?',
    },
    {   // TEST INSTRUCTIONS
        type: 'input',
        name: 'testIns',
        message: 'User command for tests?',
    },
    {   // LICENSE
        type: 'list',
        name: 'license',
        message: 'License Type?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'NONE'], 
    },
    {
        type: 'input',
        name: 'user',
        message: 'git Username?', 
    },
    {
        type: 'input',
        name: 'email',
        message: 'Project Email?', 
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses))
}

// Function call to initialize app
init();
