import inquirer from "inquirer";

const respostaNotas = await inquirer.prompt([
  {
    name: "notaMatematica",
    message: "Qual foi a sua nota em matemática?:",
    type: "number",
  },
  {
    name: "notaPortugues",
    message: "Qual foi sua nota em português?:",
    type: "number",
  },
  {
    name: "notaCiencias",
    message: "Qual foi sua nota em Ciências?",
    type: "number",
  },
]); 

console.log(`Sua média final é: ${(respostaNotas.notaMatematica + respostaNotas.notaPortugues + respostaNotas.notaCiencias) / 3}`);