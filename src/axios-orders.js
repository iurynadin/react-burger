import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burguer-builder-8ce37.firebaseio.com/'
});

export default instance;