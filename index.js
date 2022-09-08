// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'Title',
        type: 'input',
        message: 'Enter the title of your project?',
    },
    {
        name: 'Description',
        type: 'input',
        message: 'Enter a description of your project.',
    },
    {
        name: 'Installation',
        type: 'input',
        message: 'Explain how to install your project.',
    },
    {
        name: 'Usage',
        type: 'input',
        message: 'Explain how to use your project.',
    },
    {
        name: 'License',
        type: 'list',
        message: 'Select a license.',
        choices: ['N/A', 'Creative Commons (CC0)', 'Apache 2.0', 'Public Domain Dedication and License (PDDL)'],
    },
    {
        name: 'Contributing',
        type: 'input',
        message: 'Explain the contribution guidelines for your project.',
    },
    {
        name: 'Tests',
        type: 'input',
        message: 'Explain the test instructions for your project.',
    },
    {
        name: 'Github',
        type: 'input',
        message: 'Enter your Github username.',
    },
    {
        name: 'Email',
        type: 'input',
        message: 'Enter your email address.',
    }
];

function licenseBadge(str) {
    if (str === 'Creative Commons (CC0)') {
        return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'
    }
    if (str === 'Apache 2.0') {
        return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    }
    if (str === 'Public Domain Dedication and License (PDDL)') {
        return '[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)'
    }
}

//Prompt users for input and write new readme
function readmeGen() {
    inquirer
        .prompt(questions)
        .then((userInput) => {

            const newREADME =
                `# ${userInput.Title}
${licenseBadge(userInput.License)}

## Description


## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${userInput.Installation}

## License

${userInput.License}

## Usage

${userInput.Usage}

## Contributing

${userInput.Contributing}

## Tests

${userInput.Tests}

## Questions
If you have any questions, please feel free to reach out to me via [Github](https://github.com/${userInput.Github}) or [Email](mailto:${userInput.Email}).


`

            fs.writeFile('newREADME.md', newREADME, err => err ? console.log(err) : console.log('Your README has been generated!'))
        });
};

// Function call to initialize app
readmeGen();