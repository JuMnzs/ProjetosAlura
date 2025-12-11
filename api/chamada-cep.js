function fetchData(cep) {
    return new Promise((resolve, reject) => {
        fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}

async function getCep(cep) {
    try {
        const dadosCEP = await fetchData(cep);
        return dadosCEP;
    } catch (error) {
        console.error('Erro ao buscar o CEP:', error);
    }
}

getCep('06240100')
    .then(data => console.log(data))
    .catch(error => console.error('Erro ao buscar o CEP:', error));