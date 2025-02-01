import { FaTrash } from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { deleteBookmark } from '../../redux/features/bookmarkSlice';

const BookmarkCards = ({ bookmarks }) => {
    console.log(bookmarks)
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this bookmark?')) {
            dispatch(deleteBookmark(id))
        }
    }
    return (
        <div style={styles.cardsContainer}>
            {bookmarks?.map((bookmark) => (
                <div key={bookmark.id} style={styles.card}>
                    <h3 style={{ ...styles.cardTitle, overflow: 'hidden', textOverflow: 'ellipsis' }}>{bookmark.title}</h3>
                    <p style={{ ...styles.cardAuthor, overflow: 'hidden', textOverflow: 'ellipsis' }}>By {bookmark.author}</p>
                    <a href={bookmark.url} target="_blank" rel="noopener noreferrer" style={{ ...styles.cardUrl, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {bookmark.url}
                    </a>
                    <p style={{ ...styles.cardNotes, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {bookmark.summary}
                    </p>
                    <p style={{ ...styles.cardTags, overflow: 'hidden', textOverflow: 'ellipsis' }}>Tags: {bookmark.tags.map(tag => `#${tag}`).join(', ')}</p>
                    {/* Delete Icon */}
                    <FaTrash style={styles.deleteIcon} onClick={() => handleDelete(bookmark.id)} />
                </div>
            ))}
        </div>
    )
}

const styles = {
    cardsContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
        marginTop: '30px',
        color: '#555',
    },
    card: {
        border: '1px solid #ddd',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        borderRadius: '5px',
        padding: '15px',
        marginBottom: '15px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        position: 'relative',
    },
    cardTitle: {
        fontSize: '18px',
        margin: '0 0 10px',
        color: '#555',
    },
    cardAuthor: {
        fontSize: '14px',
        margin: '0 0 10px',
        color: '#555'
    },
    cardUrl: {
        fontSize: '14px',
        color: '#4CAF50',
        textDecoration: 'none',
        marginBottom: '10px',
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem',
        // display: 'inline-block',
    },
    cardNotes: {
        fontSize: '14px',
        margin: '10px 0',
    },
    cardTags: {
        fontSize: '14px',
        color: '#888',
    },
    deleteIcon: {
        fontSize: '18px',
        color: '#888',
        cursor: 'pointer',
        marginTop: '10px',
    },
}

export default BookmarkCards;
