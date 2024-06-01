import axios from 'axios';
import { API_ADDRESS } from './constant';

export async function buscarShowsPrincipais() {
    try {
        const response = await axios.get(`${API_ADDRESS}/show/principais`);
        return response.data;
    } catch (error) {
        console.error('Error fetching main shows:', error);
        throw error;
    }
}

export async function salvarShow(show) {
    try {
        const response = await axios.post(`${API_ADDRESS}/show`, show);
        return response.data;
    } catch (error) {
        console.error('Error saving show:', error);
        throw error;
    }
}
