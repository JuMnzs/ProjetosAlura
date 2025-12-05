// 9. Simulando carrinho de compras

const precosCarrinho = [20, 30, 40, 10]; //Totalizando R$100
let total = 0;

precosCarrinho.forEach((preco) => {
    total += preco;
});

console.log(`Valor final da compra: R$${total.toFixed(2) * 0.8}`);