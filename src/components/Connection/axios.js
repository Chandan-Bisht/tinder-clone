import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-backend-19.herokuapp.com/'
})

export default instance;