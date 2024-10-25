import PropTypes from "prop-types"
import { useState } from "react"

const CreateBlog = ({ onBlogCreation }) => {
    const [newBlogTitle, setNewBlogTitle] = useState('')
    const [newBlogAuthor, setNewBlogAuthor] = useState('')
    const [newBlogUrl, setNewBlogUrl] = useState('')

    const addBlog = async (event) => {
        event.preventDefault()
        try {
            const newBlog = {
                title: newBlogTitle,
                author: newBlogAuthor,
                url: newBlogUrl
            }
            const response = await onBlogCreation(newBlog)
            console.log('Blog added successfully')
            setNewBlogAuthor('')
            setNewBlogTitle('')
            setNewBlogUrl('')
        } catch (exception) {
            console.log(exception)
        }

    }
    return (
        <form onSubmit={addBlog}>
            <div>
                <div>
                    title: <input type='text' value={newBlogTitle} onChange={({ target }) => setNewBlogTitle(target.value)} />
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
    )
}

CreateBlog.propTypes = {
    onBlogCreation: PropTypes.func.isRequired
}

export default CreateBlog