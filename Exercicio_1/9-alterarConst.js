//Simulando uma constante sendo alterada para dar erro.

const pi = 3.14;

console.log(`Valor inicial de PI: ${pi}`);

try {
   pi = 90;
} catch (error) {
    console.error(`Erro ao tentar alterar PI: ${error.message}`);
}

console.log(`Valor final de PI: ${pi}`);