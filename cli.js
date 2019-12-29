const inquirer = require('inquirer');

const cli = async (data) => {
  await inquirer
    .prompt([
      {
        type: 'input',
        name: 'search query',
        message: 'What do you want to find?'
      }
    ])
    .then((answers) => {
      console.log(answers)
    });
}

module.exports = cli;