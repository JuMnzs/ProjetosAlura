//7. Descontos com map

const precos = [100, 200, 300, 400, 500];

const precosComDesconto = precos.map((preco) => {
    return preco * 0.9; // 10% de desconto, retornando 90% do preço original
});

console.log(`Preços com desconto: ${precosComDesconto}`);