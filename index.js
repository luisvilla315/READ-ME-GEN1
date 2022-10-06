// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { writeFile } = require('./generateMarkdown.js');

// TODO: Create an array of questions for user input
const userPrompt = () => {
    return inquirer.prompt([
      //title name
    {
        type: 'input',

        name: 'title',

        message: 'enter a project title',
        Validate: (titleInput) => {
            if (titleInput) {
                return true;
            } else {
                console.log('please enter a project title');
                return false;
            }
        }
    },
        //project description
        {
            type: 'input',

            name: 'description',

            message: 'enter a description',
            Validate: (descInput) => {
                if (descInput) {
                    return true;
                } else {
                    console.log('please enter a description');
                    return false;
                }
            }
        },
   //installation steps
        {
            type: 'input',

            name: 'installation',

            message: 'enter installation instructions',
            Validate: (instInput) => {
                if (instInput) {
                    return true;
                } else {
                    console.log('please enter installation instructions');
                    return false;
                }
            }
        },
        //how to use
        {
            type: 'input',

            name: 'usage',

            message: 'enter usage information',
            Validate: (usageInput) => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('please enter usage information');
                    return false;
                }
            }
        },
        //Contributions
        {
            type: 'input',

            name: 'contribution',

            message: 'enter contribution information',
            Validate: (contInput) => {
                if (contInput) {
                    return true;
                } else {
                    console.log('please enter contribution information');
                    return false;
                }
            }
        },
        //testing
        {
            type: 'input',

            name: 'tests',

            message: 'enter testing information',
            validate: (testInput) => {
              if (testInput) {
                return true;
              } else {
                console.log('please enter testing information');
                return false;
              }
            },
          },
          //Licenses
          {
            type: 'list',

            name: 'license',

            message: 'choose a software license',
            choices: ['G98', 'AS2', 'TF6', 'RA2'],
            validate: (listInput) => {
              if (listInput) {
                return true;
              } else {
                console.log('please select a license');
                return false;
              }
            },
          },
          //Github Username
          {
            type: 'input',

            name: 'github',

            message: 'enter your GitHub username',
            validate: (gitInput) => {
              if (gitInput) {
                return true;
              } else {
                console.log('Please enter your GitHub username');
                return false;
              }
            },
          },
          //Email address
          {
            type: 'input',

            name: 'email',

            message: 'enter your email address',
            validate: (emailInput) => {
              if (emailInput) {
                return true;
              } else {
                console.log('Please enter your email address');
                return false;
              }
            },
          },

        ]);
    };


// TODO: Create a function to initialize app
function init() {
    userPrompt().then((data) => {
      writeFile(data);
    });
  }
// Function call to initialize app
init();
