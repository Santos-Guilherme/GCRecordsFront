export const mensagemError = (error, customMessage) => {
    if (error.response) {
        // O servidor respondeu com um status fora da faixa 2xx
        throw new Error(`${customMessage}: ${error.response.data.error || error.message}`);
    } else if (error.request) {
        // A solicitação foi feita, mas nenhuma resposta foi recebida
        throw new Error(`${customMessage}: Nenhuma resposta do servidor`);
    } else {
        // Algo aconteceu ao configurar a solicitação que acionou um erro
        throw new Error(`${customMessage}: ${error.message}`);
    }
};
