import axios from "axios";
import { API_ADDRESS } from './constant';
import { mensagemError } from './mensagemError';

function getToken() {
    return localStorage.getItem('token');
}

export async function buscarLancamentos() {
    let url = API_ADDRESS + '/album/lancamentos';
    try {
        let r = await axios.get(url);
        return r.data;
    } catch (error) {
        mensagemError(error, 'Erro ao buscar lançamentos');
    }
}

export async function buscarAlbumPorArtista(id) {
    let url = API_ADDRESS + '/album/artista/' + id;
    try {
        let r = await axios.get(url);
        return r.data;
    } catch (error) {
        mensagemError(error, 'Erro ao buscar álbuns por artista');
    }
}

export async function buscarUltimosDoisAlbunsPorArtista(id) {
    let url = API_ADDRESS + '/album/lancamentos/' + id;
    try {
        let r = await axios.get(url);
        return r.data;
    } catch (error) {
        mensagemError(error, 'Erro ao buscar os últimos dois álbuns por artista');
    }
}

export async function salvarAlbum(album) {
    let url = API_ADDRESS + '/album';
    try {
        const token = getToken();
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };
        let r = await axios.post(url, album, config);
        return r.data;
    } catch (error) {
        mensagemError(error, 'Erro ao salvar álbum');
    }
}

export async function buscarTodosOsAlbuns() {
    try {
        const response = await axios.get(`${API_ADDRESS}/album`);
        return response.data;
    } catch (error) {
        mensagemError(error, 'Erro ao buscar álbuns');
    }
}

export async function buscarAlbumPorId(id) {
    try {
        const response = await axios.get(`${API_ADDRESS}/album/${id}`);
        return response.data;
    } catch (error) {
        mensagemError(error, 'Erro ao buscar álbum por ID');
    }
}

export async function buscarAlbumsPorNome(nome) {
    try {
        const resposta = await axios.get(`${API_ADDRESS}/album/filtro/nome/${nome}`);
        return resposta.data;
    } catch (error) {
        mensagemError(error, 'Erro ao buscar álbuns por nome');
    }
}

export async function deletarAlbumPorId(id) {
    try {
        const token = getToken();
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };
        const response = await axios.delete(`${API_ADDRESS}/album/${id}`, config);
        return response.data;
    } catch (error) {
        mensagemError(error, 'Erro ao deletar álbum por ID');
    }
}

export async function uploadImagemAlbum(id, formData) {
    try {
        const token = getToken();
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        };
        const response = await axios.put(`${API_ADDRESS}/album/imagens/${id}`, formData, config);
        return response.data;
    } catch (error) {
        mensagemError(error, 'Erro ao fazer upload da imagem do álbum');
    }
}
