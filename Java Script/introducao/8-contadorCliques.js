let cliques = 0;

function contarCliques() {
    cliques++;
}

for (let i = 0; i < 3; i++) {
    contarCliques();
    console.log(`Número de cliques: ${cliques}`);
} // Simula 3 cliques


console.log(`Total de cliques: ${cliques}`);