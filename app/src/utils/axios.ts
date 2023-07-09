import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 5 * 1000,
});

export {
    instance as baseAjax
}