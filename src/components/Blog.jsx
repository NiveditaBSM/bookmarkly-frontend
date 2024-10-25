import { useState } from "react"

const Blog = ({ blog, onAddLike, userRef, onRemoveBlog }) => {
  const [showDetails, setShowDetails] = useState(false)

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 10,
    border: 'solid  #ddd',
    borderWidth: 1,
    marginBottom: 5
  }

  const buttonStyle = {
    margin: '0.5rem'
  }

  const fewDetails = () => (
    <div>
      {blog.title}
      <button style={buttonStyle} onClick={() => setShowDetails(true)}>view</button>
    </div>
  )

  const addLike = async () => {

    const tempBlog = {
      title: blog.title,
      author: blog.author,
      url: blog.url,
      likes: blog.likes + 1
    }

    const response = await onAddLike(tempBlog, blog.id)
  }

  const removeBlog = async () => {
    const userConfirm = window.confirm(`Remove blog, ${blog.title}?`)
    if (userConfirm) {
      const response = await onRemoveBlog(blog.id)
    }

  }

  const allDetails = () => {
    return (
      <div>
        <div>{blog.title}
          <button style={buttonStyle} onClick={() => setShowDetails(false)}>hide</button>
        </div>
        <div>{blog.url}</div>
        <div>likes {blog.likes}
          <button style={buttonStyle} onClick={addLike}>like</button>
        </div>
        <div>{blog.author}</div>
        <div>
          {(blog.user.username === userRef.current) ?
            <button onClick={removeBlog}>remove</button> :
            <></>
          }
        </div>
      </div>
    )
  }

  return (
    <div style={blogStyle}>
      {
        showDetails ?
          allDetails() :
          fewDetails()
      }
    </div>

  )
}

export default Blog