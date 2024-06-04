import axios from "axios";

import { API_ADDRESS } from './constant';

export async function buscarArtistas() {
    let url = API_ADDRESS + '/artista';

    let r = await axios.get(url);
    return r.data;
}

export async function salvarArtista(corpo) {
    let url = API_ADDRESS + '/artista';

    let r = await axios.post(url, corpo);
    return r.data;
}

export async function uploadImages(id, formData) {
    const response = await axios.put(`${API_ADDRESS}/artista/imagens/${id}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    return response;
}

export async function removerArtista(id) {
    let url = API_ADDRESS + '/artista/'+ id;

    let r = await axios.delete(url);
    return r.data;
}

export async function buscarArtistasporId(id) {
    let url = (`${API_ADDRESS}/artista/${id}`);

    let r = await axios.get(url);
    return r.data;
}

export async function atualizarArtista(id, corpo) {
    let url = API_ADDRESS + '/artista/' + id;

    let r = await axios.put(url, corpo);
    return r.data;
}

export async function buscarArtistaPorNome(nome) {
    try {
        const response = await axios.get(`${API_ADDRESS}/artista/nome/${nome}`);
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            return null;
        }
        throw error;
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
        throw error;
    }
}