// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== ``) {

    return `${license}![Crates.io](https://img.shields.io/crates/l/rustc-serialize/0.3.24)`
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== ``) {
    return `![Crates.io](https://img.shields.io/crates/l/rustc-serialize/0.3.24) ${license}`
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !==``) {
    return `${license}`
  } else {
    return ``;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}`;
}

// https://img.shields.io/aur/license/c

module.exports = generateMarkdown;
renderLicenseBadge;
renderLicenseLink;
renderLicenseSection;
