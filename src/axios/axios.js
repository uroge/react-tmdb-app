import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/550?api_key=d4cf5da2d09c42ae97cf196827629126'
});

export default axiosInstance;