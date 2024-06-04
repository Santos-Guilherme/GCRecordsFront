import axios from "axios";

import { API_ADDRESS } from './constant';

export async function buscarLancamentos() {
    let url = API_ADDRESS + '/album/lancamentos';

    let r = await axios.get(url);
    return r.data;
}

export async function buscarAlbumPorArtista(id) {
    let url = API_ADDRESS + '/album/artista/'+ id;

    let r = await axios.get(url);
    return r.data;
}

export async function buscarUltimosDoisAlbunsPorArtista(id) {
    let url = API_ADDRESS + '/album/lancamentos/' + id;

    let r = await axios.get(url);
    return r.data;
}

export async function salvarAlbum(album) {
    let url = API_ADDRESS + '/album';
    let r = await axios.post(url, album);
    return r.data;
}

export async function buscarTodosOsAlbuns() {
    try {
        const response = await axios.get(`${API_ADDRESS}/album`);
        return response.data;
    } catch (error) {
        throw new Error('Erro ao buscar álbuns: ' + error.message);
    }
}

export async function buscarAlbumPorId(id) {
    try {
        const response = await axios.get(`${API_ADDRESS}/album/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Erro ao buscar álbum por ID: ' + error.message);
    }
}

export async function buscarAlbumsPorNome(nome) {
    const resposta = await axios.get(`${API_ADDRESS}/album/filtro/nome/${nome}`);
    return resposta.data;
}

export async function deletarAlbumPorId(id) {
    try {
        const response = await axios.delete(`${API_ADDRESS}/album/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Erro ao deletar álbum por ID: ' + error.message);
    }
}

export async function uploadImagemAlbum(id, formData) {
    const response = await axios.put(`${API_ADDRESS}/album/imagens/${id}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    return response;
}
