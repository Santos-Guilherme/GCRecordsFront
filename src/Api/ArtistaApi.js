import axios from "axios";
import { API_ADDRESS } from './constant';
import { mensagemError } from './mensagemError';

export async function buscarArtistas() {
    let url = API_ADDRESS + '/artista';
    try {
        let r = await axios.get(url);
        return r.data;
    } catch (error) {
        mensagemError(error, 'Erro ao buscar artistas');
    }
}

export async function salvarArtista(corpo) {
    let url = API_ADDRESS + '/artista';
    try {
        let r = await axios.post(url, corpo);
        return r.data;
    } catch (error) {
        mensagemError(error, 'Erro ao salvar artista');
    }
}

export async function uploadImages(id, formData) {
    try {
        const response = await axios.put(`${API_ADDRESS}/artista/imagens/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        mensagemError(error, 'Erro ao fazer upload das imagens do artista');
    }
}

export async function removerArtista(id) {
    let url = API_ADDRESS + '/artista/' + id;
    try {
        let r = await axios.delete(url);
        return r.data;
    } catch (error) {
        mensagemError(error, 'Erro ao remover artista');
    }
}

export async function buscarArtistasporId(id) {
    let url = `${API_ADDRESS}/artista/${id}`;
    try {
        let r = await axios.get(url);
        return r.data;
    } catch (error) {
        mensagemError(error, 'Erro ao buscar artista por ID');
    }
}

export async function atualizarArtista(id, corpo) {
    let url = API_ADDRESS + '/artista/' + id;
    try {
        let r = await axios.put(url, corpo);
        return r.data;
    } catch (error) {
        mensagemError(error, 'Erro ao atualizar artista');
    }
}

export async function buscarArtistaPorNome(nome) {
    try {
        const response = await axios.get(`${API_ADDRESS}/artista/nome/${nome}`);
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            return null;
        }
        mensagemError(error, 'Erro ao buscar artista por nome');
    }
}

export async function filtrarArtistasPorNome(nome) {
    try {
        const response = await axios.get(`${API_ADDRESS}/artista/filtro/${nome}`);
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            return null;
        }
        mensagemError(error, 'Erro ao filtrar artistas por nome');
    }
}
