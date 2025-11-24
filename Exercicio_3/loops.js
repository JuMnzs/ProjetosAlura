// Contar quantos números pares e ímpares temos entre 0 e 100

let pares = 0;
let impares = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        pares++;
    } else if (i % 2 !== 0) {
        impares++;
    }
}

console.log(`Contagem de números pares: ${pares}`);
console.log(`Contagem de números ímpares: ${impares}`);