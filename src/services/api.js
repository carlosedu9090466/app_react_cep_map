import axios from 'axios';

//https://viacep.com.br/ws/01310930/json/
const api = axios.create({
    //Ela não muda
    baseURL: "https://viacep.com.br/ws/"
});

export default api;