import {pessoas} from './ex_1.js';

pessoas.forEach((pessoa) => {
    if (pessoa.idade >= 18) {
        pessoa.maioridade = true;
        console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Profissão: ${pessoa.profissao}, Maioridade: ${pessoa.maioridade}`);
    } else {
        pessoa.maioridade = false;
        console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Profissão: ${pessoa.profissao}, Maioridade: ${pessoa.maioridade}`);
    }
});