// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const fs = require ('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?', 
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description?', 
    },
    {
        type: 'input',
        name: 'installations',
        message: 'How do youinstall your application?', 
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this application?', 
    },
    {
        type: 'input',
        name: 'guidelines',
        message: 'What are the contribution guidelines?', 
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the tests?', 
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license did you use?', 
        choices: [
            "Boost",
            "GNU",
            "MIT"
        ]
    },
    {
        type: 'input',
        name: 'gihtub',
        message: 'What is your GitHub username?', 
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function() {
        console.log(fileName);
        console.log(data)
    })

}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        writeToFile("README.md", generateMarkdown(data));
        console.log(data)
    })
}

// Function call to initialize app
init();
