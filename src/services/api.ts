import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://10.0.0.130:3333'
  baseURL: 'https://proffy-samanta.herokuapp.com'
})

export default api;