//5. Média de notas

const notas = [10, 6.5, 8, 7.5];
let soma = 0;

for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
    console.log(`soma notas: ${soma}`);
    console.log(`média: ${soma / notas.length}`);
}

if (soma / notas.length > 7) {
    console.log('Aprovado');
} else {
    console.log('Reprovado');
}