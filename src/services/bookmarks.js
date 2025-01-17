import axios from 'axios'
const backendUrl = import.meta.env.VITE_BACKEND_URL;
const baseUrl = `${backendUrl}/api/bookmarks`

let token

const setToken = (userToken) => {
  token = `Bearer ${userToken}`
}

const get = async () => {
  const config = {
    headers: {
      Authorization: token
    }
  }

  const response = await axios.get(baseUrl, config)
  return response.data
}

const add = async ({ title, author, url, summary, tags }) => {
  console.log('newBlog', { title, author, url, summary, tags })

  const config = {
    headers: {
      Authorization: token
    }
  }
  console.log('config: ', config)

  const response = await axios.post(baseUrl, { title, author, url, summary, tags }, config)
  return response.data
}

const update = async (newBlog, id) => {
  const config = {
    headers: {
      Authorization: token
    }
  }
  const requestUrl = `${baseUrl}/${id}`
  const response = await axios.put(requestUrl, newBlog, config)
  return response.data
}

const remove = async (id) => {
  const config = {
    headers: {
      Authorization: token
    }
  }
  const requestUrl = `${baseUrl}/${id}`
  const response = await axios.delete(requestUrl, config)
  return response.data
}

export default { setToken, get, add, update, remove }