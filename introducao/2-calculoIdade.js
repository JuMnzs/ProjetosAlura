import inquirer from 'inquirer';

const anoAtual = new Date().getFullYear();
const respostaBirthYear = await inquirer.prompt([
  {
    name: 'anoNascimento',
    message: 'Em que ano você nasceu?',
    type: 'number',
  }
]);

console.log(`Você tem ${anoAtual - respostaBirthYear.anoNascimento} anos`);