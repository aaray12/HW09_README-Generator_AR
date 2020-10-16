const markdown = require("./utils/generateMarkdown");
const fs = require("fs");
const inquirer = require("inquirer");




// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is your title?",
        name: "title"
    },
    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "instalation",
    },
    {
        type: "input",
        message: "What are the directions for use?",
        name: "usage",
    },
    {
        type: "input",
        message: "Credits:",
        name: "credits",
    },
    {
        type: "input",
        message: "License:",
        name: "license",
    },
    {
        type: "input",
        message: "Tests",
        name: "tests",
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github",
    },

    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    }
];


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error => {error? console.log(error): console.log("success");})
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(data=>{
        console.log(data)
        let mdResponse = markdown(data);
        writeToFile("README.md", mdResponse);
    });
 
}

// function call to initialize program
init();
