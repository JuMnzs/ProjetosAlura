//8. Filtrar valores altos

const idades = [18, 22, 15, 20, 3, 12, 10];

const maiorIdade = idades.filter((idade) => {
    return idade >= 18;
}); 

console.log(`Maiores de idade: ${maiorIdade}`);