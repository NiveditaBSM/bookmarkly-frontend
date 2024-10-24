import axios from 'axios'
const baseUrl = '/api/blogs'

let token

const setToken = (userToken) => {
  token = `Bearer ${userToken}`
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = async ({ title, author, url }) => {
  console.log('newBlog', { title, author, url })

  const config = {
    headers: {
      Authorization: token
    }
  }
  console.log('config: ', config)

  const response = await axios.post(baseUrl, { title, author, url }, config)
  return response.data
}

export default { getAll, setToken, create }