import axios from "axios"

const baseUrl = 'http://localhost:3002/api/users'

const login = async ({ email, password }) => {
    const response = await axios.post(`${baseUrl}/login`, { email, password })
    return response.data
}

const register = async ({ username, email, password }) => {
    const response = await axios.post(`${baseUrl}/register`, { username, email, password })
    console.log(response)
    return response.data
}

export default { login, register }