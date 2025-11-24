const cep = '06240100';

function fetchData() {
    return new Promise((resolve, reject) => {
        fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}

    fetchData()
    .then(data => console.log(data))
    .catch(error => console.error('Erro ao buscar o CEP:', error));


async function getCep(cep){
    try {
        const respostaAPI = await fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`);
        const dadosCEP = await respostaAPI.json();
        return dadosCEP;
    } catch (error) {
        console.error('Erro ao buscar o CEP:', error);
    }
}

console.log(getCep(cep));