import axios from 'axios';

const api = axios.create({
    baseURL: 'https://sistemas.ufac.br/sigesc'
});

export default api; 