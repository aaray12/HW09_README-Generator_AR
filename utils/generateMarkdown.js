// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents
  - [Instalation](#instalation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Tests](#tests)

  ## Instalation:
  ${data.instalation}

  ## Usage:
  ${data.usage}

  ## Credits:
  ${data.credits}

  ## License:
  ${data.license}

  ## Tests: 
  ${data.tests}

  ## Questions:
  - Reach me at: ${data.email}
  - [My GitHub profile](https://github.com/${data.github});
  `;
}

module.exports = generateMarkdown;
