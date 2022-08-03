// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Boost") {
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
  } else if (license == "GNU"){
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  } else if (license === "MIT"){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
}







// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License
  ${license}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
 return `# ${data.title}
 ${renderLicenseBadge(data.license)}

 ## Description
 ${data.description}
 
 ## Installations
 ${data.installations}

 ##usage
 ${data.usage}

 ##test
 ${data.test}

 ##license
 ${data.license}

 ##github
 ${data.github}

 ${renderLicenseSection(data.license)}
 `
}

module.exports = generateMarkdown;
