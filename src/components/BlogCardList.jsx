const BlogCardList = ({ blogs }) => {
    return (
        <div style={styles.cardsContainer}>
            {blogs.map((blog, index) => (
                <div key={index} style={styles.card}>
                    <h3 style={styles.cardTitle}>{blog.title}</h3>
                    <p style={styles.cardAuthor}>By {blog.author}</p>
                    <a href={blog.url} target="_blank" rel="noopener noreferrer" style={styles.cardUrl}>
                        {blog.url}
                    </a>
                    <p style={styles.cardNotes}>
                        {blog.notes.length > 100 ? `${blog.notes.substring(0, 100)}...` : blog.notes}
                    </p>
                    <p style={styles.cardTags}>Tags: {blog.tags}</p>
                </div>
            ))}
        </div>
    );
};

const styles = {
    cardsContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
        marginTop: '30px',
    },
    card: {
        border: '1px solid #ddd',
        borderRadius: '5px',
        padding: '15px',
        marginBottom: '15px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        //fontFamily: 'Arial, sans-serif',
    },
    cardTitle: {
        fontSize: '18px',
        margin: '0 0 10px',
        color: '#555',
    },
    cardAuthor: {
        fontSize: '14px',
        margin: '0 0 10px',
        color: '#555',
    },
    cardUrl: {
        fontSize: '14px',
        color: '#4CAF50',
        textDecoration: 'none',
        marginBottom: '10px',
        display: 'inline-block',
    },
    cardNotes: {
        fontSize: '14px',
        color: '#333',
        margin: '10px 0',
    },
    cardTags: {
        fontSize: '14px',
        color: '#888',
    },
};

export default BlogCardList