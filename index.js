// download 
//NPM install, fs install, inquirerv8 install [done]

const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const axios = require("axios");

//const generateReadMe = ({userTitle, description, tableOfContents, installInstructions, usage, contributors, screenShot, GitHub}) => 
 

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
            name: "tableOfContents",
            message: "List out the Table of Contents of your app if it applies.",
            type: "list",
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
            name: "contributors",
            message: "Who were significant contributors?",
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
            type: "text"
         },
         {
            name: "gitHub",
            message: "Link the GitHub repository.",
            type: "text"
         }
    ])  
        
.then((Response) => {
//const content = generateReadMe(Response);
fs.writeFile(`testREADME.md`, 
`# ${Response.userTitle}

## Description
#### ${Response.description}

![This is the screenshot of the application](${Response.screenShot})

## Table of Contents
#### ${Response.tableOfContents}

## Installation
#### ${Response.installInstructions}

## Usage
#### ${Response.usage}

## Contributors
#### ${Response.contributors}

## Credits
### ${Response.Credits}

## Contacts
### ${Response.GitHub}
`, (err) => err ? console.error(err) : console.log("Success!")
)

}
)
.catch(err => {
console.log(err);
});


