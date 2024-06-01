import axios from "axios";

import { API_ADDRESS } from './constant';

export async function buscarLancamentos() {
    let url = API_ADDRESS + '/album/lancamentos';

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