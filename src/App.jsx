import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import Notification from './components/Notification'
import blogService from './services/blogs'
import loginService from './services/login'
import './index.css'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)
  const [user, setUser] = useState(null)

  const [newBlogTitle, setNewBlogTitle] = useState('')
  const [newBlogAuthor, setNewBlogAuthor] = useState('')
  const [newBlogUrl, setNewBlogUrl] = useState('')

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs(blogs)
    )
  }, [])

  useEffect(() => {
    const loggedInUserJSON = window.localStorage.getItem('loggedInUser')
    if (loggedInUserJSON) {
      const loggedInUser = JSON.parse(loggedInUserJSON)
      setUser(loggedInUser)
      blogService.setToken(loggedInUser.token)
    }
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const loggedInUser = await loginService.login({ username, password })

      setUser(loggedInUser)
      blogService.setToken(loggedInUser.token)
      const loggedInUserJSON = JSON.stringify(loggedInUser)
      window.localStorage.setItem('loggedInUser', loggedInUserJSON)

      setUsername('')
      setPassword('')

    } catch (exception) {
      setErrorMessage('login failed! please provide valid credentials')

      setTimeout(() => setErrorMessage(null), 5000)
    }
  }

  const handleBlogAddition = async (event) => {
    console.log('handling blog addition')

    event.preventDefault()

    console.log('title, author, url: ', newBlogTitle, newBlogAuthor, newBlogUrl)
    const tempBlog = {
      title: newBlogTitle,
      author: newBlogAuthor,
      url: newBlogUrl
    }
    console.log('temp log: ', tempBlog)
    console.log('sending temp blog to blog creation service')
    const newBlog = await blogService.create(tempBlog)
    setBlogs(blogs.concat(newBlog))
    setSuccessMessage(`blog with title ${newBlog.title} added successfully`)
    setNewBlogAuthor('')
    setNewBlogTitle('')
    setNewBlogUrl('')
    setTimeout(() => setSuccessMessage(null), 5000)
  }

  const handleLogout = () => {
    setUser(null)
    window.localStorage.clear()
  }

  const closeErrorMessage = () => {
    setErrorMessage(null)
  }

  const closeSuccessMessage = () => {
    setSuccessMessage(null)
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handlePassChange = (event) => {
    setPassword(event.target.value)
  }

  const loginForm = () => (
    <div>
      <form onSubmit={handleLogin}>
        <h2>Login to application</h2>
        <div>
          Username: <input type='text' value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          Password: <input type='password' value={password} onChange={handlePassChange} />
        </div>
        <button type='submit'>login</button>
      </form>
    </div>
  )

  return (
    <div>
      <Notification errorMessage={errorMessage} successMessage={successMessage}
        onErrClose={closeErrorMessage} onSuccClose={closeSuccessMessage} />
      <main>
        {user === null ?
          loginForm() :
          <div>
            <h2>blogs</h2>
            <p> {user.name} logged in <br />
              <a href='#' onClick={handleLogout}> (logout) </a>
            </p>
            <form onSubmit={handleBlogAddition}>
              <div>
                <div>
                  title: <input type='text' value={newBlogTitle} onChange={({ target }) => {
                    console.log(target.value)
                    return setNewBlogTitle(target.value)
                  }
                  } />
                </div>
                <div>
                  author: <input type='text' value={newBlogAuthor} onChange={({ target }) => setNewBlogAuthor(target.value)} />
                </div>
                <div>
                  url: <input type='text' value={newBlogUrl} onChange={({ target }) => setNewBlogUrl(target.value)} />
                </div>
                <button type='submit'>create</button>
              </div>
            </form>
            <div>
              {blogs.map(blog =>
                <Blog key={blog.id} blog={blog} />
              )}
            </div>
          </div>
        }
      </main>
    </div>
  )
}

export default App