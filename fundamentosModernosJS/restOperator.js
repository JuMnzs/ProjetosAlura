const numeros = [1, 2, 3, 4, 5];

// Usando o operador rest para coletar os primeiros dois números e o restante em um array
const [primeiro, segundo, ...resto] = numeros;

console.log(primeiro); // 1
console.log(segundo); // 2
console.log(resto);    // [3, 4, 5]

// Função que usa o operador rest para aceitar um número variável de argumentos
function soma(...valores) {
    return valores.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
}

console.log(soma(1, 2, 3));