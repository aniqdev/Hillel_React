import axios from 'axios';
import { BASE_URL_MOVIES } from "./constants";

console.log( 'BASE_URL_MOVIES', BASE_URL_MOVIES);

const instance = axios.create({
    baseURL: BASE_URL_MOVIES,
});

export default instance;