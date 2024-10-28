import { useState, useEffect, useRef } from 'react'
import Blog from './components/Blog'
import Notification from './components/Notification'
import Toggable from './components/Togglable'
import CreateBlog from './components/CreateBlog'
import LoginForm from './components/LoginForm'
import BlogSection from './components/BlogSection'
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

  const userRef = useRef()

  useEffect(() => {
    async function fetchdata(params) {
      const blogs = await blogService.getAll()
      const sortedBlogs = blogs.sort((a, b) => b.likes - a.likes)
      setBlogs(sortedBlogs)
    }
    fetchdata()
  }, [])

  useEffect(() => {
    const loggedInUserJSON = window.localStorage.getItem('loggedInUser')
    if (loggedInUserJSON) {
      const loggedInUser = JSON.parse(loggedInUserJSON)
      setUser(loggedInUser)
      userRef.current = loggedInUser.username
      console.log(loggedInUser)
      console.log('current user ref', userRef.current)
      blogService.setToken(loggedInUser.token)
    }
  }, [])

  const handleLogin = async ({ username, password }) => {

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

  const handleBlogAddition = async ({ title, author, url }) => {
    console.log('handling blog addition')

    console.log('title, author, url: ', { title, author, url })
    const tempBlog = { title, author, url }
    console.log('temp log: ', tempBlog)
    console.log('sending temp blog to blog creation service')
    const newBlog = await blogService.create(tempBlog)
    setBlogs(blogs.concat(newBlog))
    setSuccessMessage(`blog with title ${newBlog.title} added successfully`)

    setTimeout(() => setSuccessMessage(null), 5000)
  }

  const handleAddLike = async (newBlog, id) => {

    const updatedBlog = await blogService.update(newBlog, id)
    console.log(updatedBlog)

    const tempBlogs = blogs.map(blog => {
      if (blog.id === id) {
        blog.likes += 1
      }
      return blog
    })
    const sortedBlogs = tempBlogs.sort((a, b) => b.likes - a.likes)
    console.log(sortedBlogs)
    setBlogs(sortedBlogs)
  }

  const handleRemoveBlog = async (id) => {
    try {
      const deletedBlog = await blogService.remove(id)
    } catch (exception) {
      if (exception.response.data) {
        console.log('setting error message')
        setErrorMessage('Token expired, please login again and try')
        setTimeout(() => {
          setErrorMessage(null)
        }, 10000);
        if (exception.response.data.error === 'TokenExpiredError') {
          setUser(null)
          window.localStorage.removeItem('loggedInUser')
        }
      }
    }


    const tempBlogs = blogs.filter(blog => blog.id !== id)
    setBlogs(tempBlogs)
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
          <LoginForm handleLogin={handleLogin} /> :
          <BlogSection />
          // <div>

          //   <h2>blogs</h2>
          //   <p> {user.name} logged in <br />
          //     <a href='#' onClick={handleLogout}> (logout) </a>
          //   </p>


          //   <Toggable buttonLabel='Create new Blog'>
          //     <CreateBlog onBlogCreation={handleBlogAddition} />
          //   </Toggable>

          //   <div>
          //     {blogs.map(blog =>
          //       <Blog key={blog.id} blog={blog} onAddLike={handleAddLike} userRef={userRef}
          //         onRemoveBlog={handleRemoveBlog} />
          //     )}
          //   </div>
          // </div>
        }
      </main>
    </div>
  )
}

export default App