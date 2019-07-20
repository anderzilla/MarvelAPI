import axios from 'axios';

const api = axios.create({
    baseUrl: 'http://gateway.marvel.com/'
});

export default api;