// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `[Github license](https://img.shields.io/badge/license/license-${license}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
    
  This project is licensed under ${license}`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.desc}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)
${renderLicenseLink(data.license)}

* [Contributing](#contributing)

* [Tests](#tests)

## Installation

To install dependencies, run this command:

${data.install}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contrib}

Run this command for tests:
${data.testIns}

## Questions

For questions about the repo, open an issue or contact me at ${data.email}. More of my work can be found at [${data.user}](https://github.com/${data.github}/).
`;
}

module.exports = generateMarkdown;
