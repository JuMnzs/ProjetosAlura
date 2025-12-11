import inquirer from 'inquirer';

const respostaUser = await inquirer.prompt([

    {
        name: 'cidade',
        message: 'Em que cidade você está?',
        type: 'input',
    },

    {
        name: 'estado',
        message: 'Em que estado você está?',
        type: 'input',
    },
    {
        name: 'pais',
        message: 'Em que país você está?',
        type: 'input',
    }
]);

console.log(`Você está em ${respostaUser.cidade}, ${respostaUser.estado} - ${respostaUser.pais}`);