import axios from "axios"
const backendUrl = import.meta.env.VITE_BACKEND_URL;
const baseUrl = `${backendUrl}/api/users`

const login = async ({ email, password }) => {
    const response = await axios.post(`${baseUrl}/login`, { email, password })
    return response.data
}

const register = async ({ username, email, password }) => {
    try {
        const response = await axios.post(`${baseUrl}/register`, { username, email, password })
        console.log('response:', response)
        return response.data
    } catch (error) {
        console.log('error:', error)
        return error.response.data
    }

}

export default { login, register }