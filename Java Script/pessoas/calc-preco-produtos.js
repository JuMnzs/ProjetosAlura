const produtos = [
    { nome: "Camisa", preco: 29.99, quantidade: 3 },
    { nome: "Calça", preco: 59.99, quantidade: 2 },
    { nome: "Tênis", preco: 89.99, quantidade: 2 }
]

let preçoCompra = (produtos[0].preco * produtos[0].quantidade) + (produtos[2].preco * produtos[2].quantidade);

console.log(preçoCompra)