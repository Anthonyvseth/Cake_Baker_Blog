import axios from 'axios'

const ApiClient = axios.create({baseURL:
    proccess.env.NODE_ENV === 'production'
    ?`${window.location.origin}/api`:
     'http://localhost:3005/api'})

ApiClient.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (err) => Promise.reject(err)
)

export default ApiClient
