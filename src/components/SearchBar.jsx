// SearchBar.js
import React from 'react';

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
        </div>
    );
};

const styles = {
    searchContainer: {
        width: '100%',
        marginBottom: '10px',
    },
    searchInput: {
        width: '70%',
        padding: '10px',
        fontSize: '14px',
        borderRadius: '5px',
        border: '1px solid #ddd',
    },
};

export default SearchBar;
