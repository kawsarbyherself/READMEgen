const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);


// function that asks questions from user

function promptUser() {
    return inquirer.prompt([

     {
        type: "input",
        message: "name of project?",
        name: "title"
     },
     {
         type: "input",
         message: "Enter description of project",
         name: "description"
     },
     {
         title: "input",
         message: "What are installation instructions?",
         name: "installation"
     },
     {
        title: "input",
        message: "how to use the application",
        name: "usage"
    },
    {
        title: "input",
        message: "who contributed in this project?",
        name: "contribution"
    },
    {
        title: "input",
        message: "what are the test instructions?",
        name: "test"
    },
    {
        title: "checkbox",
        message: "Please select a license",
        choices: ['Apache', 'MIT','ISC', 'GNU GPLv3'],
        name: "license"
    },
    {
        title: "input",
        message: "Any credits?",
        name: "credits"
    },
    {
        title: "input",
        message: "GitHub username:",
        name: "username"
    },
    {
        title: "input",
        message: "Email Address:",
        name: "email"
    },
    ])
}

function generateMarkdown(response) {
    return `
    # ${response.title}

    # Table of Contents

    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contribution](#contribution)
    - [Test](#test)
    - [Credits](#credits)
    - [License](#license)
    - [Questions](#questions)

 ## My Project:
    ${response.title}

 ## Description:
    ${response.description}

 ## Installation:
    ${response.installation}

 ## Usage:
    ${response.usage}

 ## Contribution:
    ${response.contribution}
    
 ## Test:
    ${response.test}

 ## Credits:
    ${response.test}
   
 ## License:
    ${response.license}

 ## Questions:
   For any questions reach me via GitHub:
   (https://github.com/${response.username})

   For more information contact me via ${response.email}

   `;
}

//function to initialize program
async function init() {
    try {
        const response = await promptUser();

        const readMe = generateMarkdown(response);

        await writeFileAsync("README.md", readMe);
        console.log("Success!");

    } catch (err) {
        console.log(err);
    }
}

init();