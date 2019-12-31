const inquirer = require('inquirer');
const open = require('open');

const cli = async (data) => {
  await inquirer
    .prompt([
      {
        type: 'rawlist',
        name: 'links',
        message: 'What do you want to find?',
        choices: data
      }
    ])
    .then((answers) => {
      open(answers.links, {app: 'firefox'});
    });
}

module.exports = cli;