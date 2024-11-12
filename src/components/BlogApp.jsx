import { useState, useEffect, useRef } from 'react'
import {
  Navigate
} from 'react-router-dom'
import { FaSignOutAlt } from 'react-icons/fa'
import BlogSection from './BlogSection'
import Divider from './Divider'
import blogService from '../services/blogs'
import '../index.css'

const BlogApp = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const blogs = await blogService.getAll()
      const sortedBlogs = blogs.sort((a, b) => b.likes - a.likes)
      setBlogs(sortedBlogs)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const loggedInUserJSON = window.localStorage.getItem('loggedInUser');
    if (loggedInUserJSON) {
      const loggedInUser = JSON.parse(loggedInUserJSON);
      setUser(loggedInUser);
      blogService.setToken(loggedInUser.token);
    }
    setLoading(false);
  }, []);



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


  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: '#1f2d36',
      color: '#ffffff',
      height: '100vh',
    },
    sectionHeading: {
      justifyContent: 'flex-start',
      fontSize: '22px',
      marginBottom: '20px',
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate replace to="/login" />;
  }


  return (
    <>
      <main>
        <div style={styles.container}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '22px', width: '80%' }}>
            <span><h2 style={styles.sectionHeading}>Welcome, {user.name}</h2></span>
            <FaSignOutAlt title='logout' style={{ cursor: 'pointer' }} onClick={handleLogout} />
          </div>
          <Divider />
          <BlogSection />
        </div>
      </main>
    </>
  )
}



export default BlogApp