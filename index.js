// TODO: Include packages needed for this application
const inquirer= require('inquirer');
const fs= require('fs');
const generateBadge = require('./utils/generateMarkdown.js')

const generateReadme = ({title,description,installation,usage,credits,tests,license,username,email}) => 
`# ${title}

## Description
${description}

## Table of Contents
-Description ${data.description}
-Installation${data.installation}
-Usage${data.usage}
-License${data.license}
-Credits${data.credits}


## Installation
${installation}

## Usage
${usage}

## License
${license}

## Contributing
${credits}

## Tests
${tests}

##Questions
Here is a link to my GitHub profile ${username}.
If you have any questions or would like to contribute to this  project you can email me at ${email}.
`
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'Input',
        message: 'What is your project title?',
        name: 'title',
    },
    {   type:'list',
        message:'Choose license',
        choices:['Apache-2.0','MIT','BSD','GPL'],
        name: 'license'
    },
    {
        type: 'Input',
        message: 'What is your project description',
        name: 'description',
    },
    {
        type: 'Input',
        message: 'What is your project installation instructions?',
        name: 'installation',
    },
    {
        type: 'Input',
        message: 'What is your project usage information?',
        name: 'usage',
    },
    {
        type: 'Input',
        message: 'What is your project contribution guidelines?',
        name: 'contribution',
    },
    {
        type: 'Input',
        message: 'What is your project test instructions?',
        name: 'tests',
    },
    {
        type: 'Input',
        message: 'GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'email address',
        name: 'email'
    }
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init(generateReadme) { 
    inquirer.prompt(questions).then((answers) => {
        const newReadMe = generateReadme(answers);

        fs.writeFile('README.md', newReadMe, (err) =>
        err ? console.log(err) : console.log ('Successfully written Readme!')
        );
    },)
};

// Function call to initialize app
init(generateReadme);
