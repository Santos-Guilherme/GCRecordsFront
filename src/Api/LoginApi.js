import axios from "axios";
import { API_ADDRESS } from './constant';

export async function buscarLogin(loginData) {
    try {
        const response = await axios.post(`${API_ADDRESS}/login/entrar`, loginData);
        return response.data;
    } catch (error) {
        if (error.response) {
            throw error.response.data;
        } else {
            throw { error: 'Erro ao tentar fazer login.' };
        }
    }
}
