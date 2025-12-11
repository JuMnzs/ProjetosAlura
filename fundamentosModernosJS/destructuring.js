const obj = {
    nome: 'Alice',
    idade: 30,
    profissao: 'Engenheira'
}

const array = [
    'Maçã',
    'Banana',
    'Cereja'
]

// Destructuring de objeto
const {nome, idade, profissao} = obj;

// Destructuring de array
const [fruta1, fruta2, fruta3] = array;

console.log(idade);
console.log(fruta2);