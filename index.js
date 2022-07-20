// Required support to run:
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const axios = require("axios");


 // Questtions to complete user's readme. 

inquirer.prompt([
        {
            name: "userTitle",
            message: "What is the name of your project?",
            tpye: "text"
        },
        {
            name: "description",
            message: "What does your program do?",
            type: "text"
        },
        {
            name: "installInstructions",
            message: "How is the program installed?",
            type: "text"
        },
        {
            name: "usage",
            message: "How is this program utilized?",
            type: "text"
        },
        {
            name: "license",
            message: "How is this code licensed?",
            type: "list",
            choices: ['afl-3.0', 'apache-2.0', 'artistic-2.0', 'bsl-1.0', 'bsd-2-clause', 'bsd-3-clause', 'cc', 'cc0-1.0', 'cc=by=4.0', 'cc-by=sa-4.0', 'wtfpl', 'epl-1.0', 'eupl-1.1', 'gpl', 'gpl-2.0', 'gpl-3.0', 'lgpl-2.1', 'lgpl-3.0', 'ms=pl', 'mit', 'mpl-2.0', 'osl=3.0', 'postgresql', 'ncsa', 'unlicense', 'zlib'],
        },
        {
            name: "contributors",
            message: "Tell clients how they can contribute to the site?",
            type: "text"
        },
        {
           name: "screnShot",
           message: "Link your a screenshot of the program.",
           type: "text"
        },
        {
            name: "credits",
            message: "Who were the major collaborators?",
            type: "text",
         },
         {
            name: "tests",
            message: "Tests that you used?",
            type: "text"
         },
         {
            name: "questions",
            message: "Questions you needed answered during the development process?",
            type: "text"
         },
         {
            name: "gitHub",
            message: "Link to your GitHub repository.",
            type: "text"
         },
         {
            name: "email",
            message: "Submit your email address for POC for the website.",
            type: "text"
         }
    ])  
        // Take respsones and write to testREADME.md in the format provided.
.then((Response) => {
fs.writeFile(`testREADME.md`, 
`# **${Response.userTitle}**

## Description
#### ${Response.description}

![This is the screenshot of the application](${Response.screenShot})

## Table of Contents
- [Installation](#installation)
- [Usage](#usage) 
- [License](#license)
- [Badges](#badges)
- [Contributors](#Contributors)
- [Tests](#Tests)
- [Questions](#Questions)
- [Credits](#Credits)
- [Contacts](#Contacts)

## Installation
#### ${Response.installInstructions}

## Usage
#### ${Response.usage}

## License
#### ${Response.license}

## Badge
![This is the badge of the application](https://img.shields.io/badge/license-${Response.license}-blue.svg)

## Contributors
#### Contribute Here: [${Response.contributors}](${Response.contributors})

## Tests
#### ${Response.tests}

## Questions
#### ${Response.questions}

## Credits
### ${Response.credits}

## Contacts
### Email: [${Response.email}](${Response.email})
### [GitHub](${Response.gitHub})
`, (err) => err ? console.error(err) : console.log("Success!")
)

}
) //Catch errors.
.catch(err => {
console.log(err);
});


