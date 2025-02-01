import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookmark } from '../../redux/features/bookmarkSlice';
import { FiCheck } from 'react-icons/fi';

const AddBookmarkForm = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        url: '',
        summary: '',
        tags: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBookmark = { ...formData };
        newBookmark.tags = formData.tags.split(',').map(tag => tag.trim());
        dispatch(addBookmark(newBookmark));
        setFormData({
            title: '',
            author: '',
            url: '',
            summary: '',
            tags: '',
        });
    };

    return (
        <div style={styles.formContainer}>
            <form style={styles.blogForm} onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Blog Title"
                    value={formData.title} onChange={handleChange} style={styles.input} required />
                <input type="text" name="author" placeholder="Author"
                    value={formData.author} onChange={handleChange} style={styles.input} required />
                <input type="url" name="url" placeholder="URL"
                    value={formData.url} onChange={handleChange} style={styles.input} required />
                <textarea name="summary" placeholder="Summary / Description"
                    value={formData.notes} onChange={handleChange} style={styles.textarea} />
                <input type="text" name="tags" placeholder="Tags (comma-separated)"
                    value={formData.tags} onChange={handleChange} style={styles.input} />
                <button type="submit" style={styles.doneButton}>
                    <FiCheck title='save' style={styles.icon} />
                </button>
            </form>
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0 20px',
        backgroundColor: '#1f2d36',
        color: '#ffffff',
        height: '100vh',
    },
    formContainer: {
        width: '50%',
        marginBottom: '20px',
        padding: '20px'
    },
    label: {
        padding: '10px',
        marginRight: '8px',
        fontSize: '14px',
    },
    sectionHeading: {
        width: '80%',
        fontSize: '22px',
        marginBottom: '20px',
        //justifyContent: 'flex-start',
        alignItems: 'center'
    },
    blogForm: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        backgroundColor: '#f9f9f9',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        position: 'relative',
    },
    input: {
        padding: '12px',
        fontSize: '16px',
        borderRadius: '5px',
        border: '1px solid #ddd',
    },
    textarea: {
        padding: '12px',
        fontSize: '16px',
        borderRadius: '5px',
        border: '1px solid #ddd',
        resize: 'vertical',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
    },
    doneButton: {
        position: 'absolute',
        bottom: '-0.1rem',
        right: '-5rem',
        backgroundColor: '#4CAF50',
        color: '#ffffff',
        border: 'none',
        borderRadius: '50%',
        padding: '0.75rem',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        fontSize: '20px',
    },
};

export default AddBookmarkForm;