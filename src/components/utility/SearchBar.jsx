import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <div style={styles.searchContainer}>
            <input
                type="text"
                placeholder="Search by title or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={styles.searchInput}
            />
            <FaSearch style={styles.searchIcon} />
        </div>
    );
};

const styles = {
    searchContainer: {
        width: '100%',
        marginBottom: '10px',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
    },
    searchInput: {
        width: '100%',
        padding: '10px',
        fontSize: '14px',
        borderRadius: '5px',
        border: '1px solid #ddd',
        paddingRight: '30px', // space for the icon
    },
    searchIcon: {
        position: 'absolute',
        right: '10px',
        fontSize: '16px',
        color: '#888',
    },
};

export default SearchBar;
