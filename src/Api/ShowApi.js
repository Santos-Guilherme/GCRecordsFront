import axios from 'axios';
import { API_ADDRESS } from './constant';
import { mensagemError } from './mensagemError'; // Importe a função mensagemError

export const salvarShow = async (show) => {
    try {
        const response = await axios.post(`${API_ADDRESS}/show`, show);
        return response.data;
    } catch (error) {
        mensagemError(error, 'Erro ao salvar show');
    }
};

export const atualizarShow = async (show) => {
    try {
        const response = await axios.put(`${API_ADDRESS}/show`, show);
        return response.data;
    } catch (error) {
        mensagemError(error, 'Erro ao atualizar show');
    }
};

export const buscarShowPorId = async (id) => {
    try {
        const response = await axios.get(`${API_ADDRESS}/show/${id}`);
        return response.data;
    } catch (error) {
        mensagemError(error, 'Erro ao buscar show por ID');
    }
};

export const listarShows = async () => {
    try {
        const response = await axios.get(`${API_ADDRESS}/show`);
        return response.data;
    } catch (error) {
        mensagemError(error, 'Erro ao listar shows');
    }
};

export const buscarShowsPrincipais = async () => {
    try {
        const response = await axios.get(`${API_ADDRESS}/show/principais`);
        return response.data;
    } catch (error) {
        mensagemError(error, 'Erro ao buscar shows principais');
    }
};

export const buscarShowsPorArtista = async (idArtista) => {
    try {
        const response = await axios.get(`${API_ADDRESS}/show/artista/${idArtista}`);
        return response.data;
    } catch (error) {
        mensagemError(error, 'Erro ao buscar shows por artista');
    }
};

export const cancelarShow = async (id) => {
    try {
        const response = await axios.delete(`${API_ADDRESS}/show/${id}`);
        return response.data;
    } catch (error) {
        mensagemError(error, 'Erro ao cancelar show');
    }
};

export const consultarShowsData = async (dataInicio, dataFim) => {
    try {
        const response = await axios.get(`${API_ADDRESS}/show/data/${dataInicio}/${dataFim}`);
        return response.data;
    } catch (error) {
        mensagemError(error, 'Erro ao consultar shows por data');
    }
};

export const consultarShowsPrincipaisData = async (dataInicio, dataFim) => {
    try {
        const response = await axios.get(`${API_ADDRESS}/show/principais/data/${dataInicio}/${dataFim}`);
        return response.data;
    } catch (error) {
        mensagemError(error, 'Erro ao consultar shows principais por data');
    }
};

export const consultarShowsPorArtistaeData = async (idArtista, dataInicio, dataFim) => {
    try {
        const response = await axios.get(`${API_ADDRESS}/show/artista/${idArtista}/data/${dataInicio}/${dataFim}`);
        return response.data;
    } catch (error) {
        mensagemError(error, 'Erro ao consultar shows por artista e data');
    }
};

export const consultarShowsArtistaPrincipaisData = async (idArtista, dataInicio, dataFim) => {
    try {
        const response = await axios.get(`${API_ADDRESS}/show/artista/${idArtista}/principais/data/${dataInicio}/${dataFim}`);
        return response.data;
    } catch (error) {
        mensagemError(error, 'Erro ao consultar shows principais por artista e data');
    }
};

export const verificarShowExistente = async (artistaId, dataHora) => {
    try {
        const response = await axios.get(`${API_ADDRESS}/show/verificar/${artistaId}/data/${dataHora}`);
        return response.data;
    } catch (error) {
        mensagemError(error, 'Erro ao verificar show existente');
    }
};
