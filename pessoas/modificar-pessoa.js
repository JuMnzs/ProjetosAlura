import pessoa from './pessoas.js';

pessoa.idade = 22;
pessoa.cidade = "São Paulo";

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
// console.log(`Pessoa: ${Object.entries(pessoa)}`);