// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
<<<<<<< HEAD
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}
=======
function renderLicenseBadge(license) {
  if (license !== 'None'){
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  } else {
    return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== 'None'){
    return `\n* [License](#license)\n`
  } else {
    return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `
    This project is protected by ${license} licensing.`;
  }
  return '';
}
>>>>>>> 1a9fb73397973aef07c20a09c6992909b14d3cac

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
<<<<<<< HEAD
=======
  ${renderLicenseBadge(data.license)}

  ## Description
  ---

  ${data.description}

  ## Table of Contents
  ---
  
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [How to Contribute](#how-to-contribute)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ---

  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage
  ---

  ${data.usage}

  ## License
  ---

  ${renderLicenseSection(data.license)}


  ## How to Contribute
  ---

  ${data.contributing}

  ## Tests
  ---

  Tests can be ran by using the following commands:

  \`\`\`
  ${data.tests}
  \`\`\`

  ## Questions
  ---

  If there are any questions or concerns about the repo, feel free to contact me anytime directly at ${data.email}.
  You can find more of my work and contributions at [${data.github}](https://github.com/${data.github}/).
>>>>>>> 1a9fb73397973aef07c20a09c6992909b14d3cac

`;
}

module.exports = generateMarkdown;
