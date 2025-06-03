import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.tudominio.com', // cámbialo por el dominio real
})

export default api
