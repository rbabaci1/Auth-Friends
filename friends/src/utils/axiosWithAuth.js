import axios from 'axios';

const axiosWithAuth = () =>
  axios.create({
    // baseURL: 'http://localhost:5000/api',
    baseURL: 'https://rabah-backend.herokuapp.com/api/',
    headers: {
      Authorization: localStorage.getItem('token'),
    },
  });

export default axiosWithAuth;
