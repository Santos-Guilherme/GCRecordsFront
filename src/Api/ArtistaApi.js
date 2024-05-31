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

export async function removerArtista(id) {
    let url = API_ADDRESS + '/artista/'+ id;

    let r = await axios.delete(url);
    return r.data;
}

export async function buscarArtistasporId(id) {
    let url = API_ADDRESS + '/artista/' + id;

    let r = await axios.get(url);
    return r.data;
}