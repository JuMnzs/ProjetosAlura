const salario = 3000;
const reajuste = 1.1; //Considerando 1.1 para ficar 100% + 10%

console.log(`Seu salário teve um aumento de 10%, passando de R$${salario} para R$${(salario * reajuste).toFixed(0)}`);