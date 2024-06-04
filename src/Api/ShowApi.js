import axios from 'axios';
import { API_ADDRESS } from './constant';

export const salvarShow = async (show) => {
    try {
        const response = await axios.post(`${API_ADDRESS}/show`, show);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const atualizarShow = async (show) => {
    try {
        const response = await axios.put(`${API_ADDRESS}/show`, show);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const buscarShowPorId = async (id) => {
    try {
        const response = await axios.get(`${API_ADDRESS}/show/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const listarShows = async () => {
    try {
        const response = await axios.get(`${API_ADDRESS}/show`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const buscarShowsPrincipais = async () => {
    try {
        const response = await axios.get(`${API_ADDRESS}/show/principais`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const buscarShowsPorArtista = async (idArtista) => {
    try {
        const response = await axios.get(`${API_ADDRESS}/show/artista/${idArtista}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const cancelarShow = async (id) => {
    try {
        const response = await axios.delete(`${API_ADDRESS}/show/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const consultarShowsData = async (dataInicio, dataFim) => {
    try {
        const response = await axios.get(`${API_ADDRESS}/show/data/${dataInicio}/${dataFim}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const consultarShowsPrincipaisData = async (dataInicio, dataFim) => {
    try {
        const response = await axios.get(`${API_ADDRESS}/show/principais/data/${dataInicio}/${dataFim}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const consultarShowsPorArtistaeData = async (idArtista, dataInicio, dataFim) => {
    try {
        const response = await axios.get(`${API_ADDRESS}/show/artista/${idArtista}/data/${dataInicio}/${dataFim}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const consultarShowsArtistaPrincipaisData = async (idArtista, dataInicio, dataFim) => {
    try {
        const response = await axios.get(`${API_ADDRESS}/show/artista/${idArtista}/principais/data/${dataInicio}/${dataFim}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const verificarShowExistente = async (artistaId, dataHora) => {
    try {
        const response = await axios.get(`${API_ADDRESS}/show/verificar/${artistaId}/data/${dataHora}`);
        console.log("testes: " + response.data.existe)
        return response.data;
    } catch (error) {
        throw error;
    }
};
