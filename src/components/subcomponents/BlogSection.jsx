import { useState } from 'react';
import { FiCheck } from 'react-icons/fi';
import Divider from '../utility/Divider';
import BlogCards from './BookmarkCards';
import SearchBar from '../utility/SearchBar';
import FilterDropdown from '../utility/Dropdown';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookmarks } from '../../features/bookmarkSlice';

const BlogSection = () => {

    // const [blogs, setBlogs] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        url: '',
        summary: '',
        tags: '',
    });
    const [searchTerm, setSearchTerm] = useState('');
    const [createdDateFilter, setCreatedDateFilter] = useState('');
    const [modifiedDateFilter, setModifiedDateFilter] = useState('');

    const dispatch = useDispatch();
    const bookmarks = useSelector((state) => state.bookmarks.data) ?? [];
    const status = useSelector((state) => state.bookmarks.status);
    const error = useSelector((state) => state.bookmarks.error);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchBookmarks());
        }
    }, [dispatch, status]);

    console.log('Data:', bookmarks);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBlog = { ...formData, createdAt: new Date(), modifiedAt: new Date() };
        setBlogs([...blogs, newBlog]);
        setFormData({
            title: '',
            author: '',
            url: '',
            summary: '',
            tags: '',
        });
    };

    const filterBlogs = (blogs) => {
        return blogs.filter((blog) => {
            const matchesSearchTerm = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                blog.tags?.toLowerCase().includes(searchTerm.toLowerCase());

            const createdDateMatch = createdDateFilter === '' || checkDateMatch(blog.createdAt, createdDateFilter);
            const modifiedDateMatch = modifiedDateFilter === '' || checkDateMatch(blog.modifiedAt, modifiedDateFilter);

            return matchesSearchTerm && createdDateMatch && modifiedDateMatch;
        });
    };

    const checkDateMatch = (date, filter) => {
        const now = new Date();
        const blogDate = new Date(date);
        switch (filter) {
            case 'today':
                return blogDate.toDateString() === now.toDateString();
            case 'lastWeek':
                return now - blogDate <= 7 * 24 * 60 * 60 * 1000;
            case 'lastMonth':
                return now - blogDate <= 30 * 24 * 60 * 60 * 1000;
            case 'older':
                return now - blogDate > 30 * 24 * 60 * 60 * 1000;
            default:
                return true;
        }
    };

    return (
        <>
            <div style={styles.formContainer}>
                <form style={styles.blogForm} onSubmit={handleSubmit}>
                    <input type="text" name="title" placeholder="Blog Title"
                        value={formData.title} onChange={handleChange} style={styles.input} required />
                    <input type="text" name="author" placeholder="Author"
                        value={formData.author} onChange={handleChange} style={styles.input} required />
                    <input type="url" name="url" placeholder="URL"
                        value={formData.url} onChange={handleChange} style={styles.input} required />
                    <textarea name="notes" placeholder="Summary / Description"
                        value={formData.notes} onChange={handleChange} style={styles.textarea} />
                    <input type="text" name="tags" placeholder="Tags (comma-separated)"
                        value={formData.tags} onChange={handleChange} style={styles.input} />
                    <button type="submit" style={styles.doneButton}>
                        <FiCheck title='save' style={styles.icon} />
                    </button>
                </form>
            </div>

            <Divider />

            <div style={styles.filterContainer}>
                <div style={styles.searchContainer}>
                    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} style={styles.searchInput} />
                </div>
                <FilterDropdown filterType="Created Date" selectedDate={createdDateFilter} handleDateChange={setCreatedDateFilter} />
                <FilterDropdown filterType="Modified Date" selectedDate={modifiedDateFilter} handleDateChange={setModifiedDateFilter} />

            </div>

            <div style={styles.cardsContainer}>
                <BlogCards blogs={filterBlogs(blogs)} />
            </div>

        </>
    );
};


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
    filterContainer: {
        width: '80%',
        marginBottom: '20px',
        marginTop: '20px',
        display: 'flex',
        gap: '15px',
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {
        padding: '10px',
        marginRight: '8px',
        fontSize: '14px',
    },
    searchContainer: {
        flex: 1,
        width: '100%'
    },
    searchInput: {
        width: '100%',
        padding: '10px',
        fontSize: '14px',
        borderRadius: '5px',
        border: '1px solid #ddd',
    },
    dropdownContainer: {
        width: '250px',
    },
    cardsContainer: {
        width: '80%',
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

export default BlogSection;