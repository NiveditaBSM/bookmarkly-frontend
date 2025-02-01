import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Divider from '../utility/Divider';
import BookmarkCards from './BookmarkCards';
import SearchBar from '../utility/SearchBar';
import Dropdown from '../utility/Dropdown';
import { fetchBookmarks } from '../../redux/features/bookmarkSlice';


const BookmarkList = () => {
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

    console.log('Bookmarks:', bookmarks);

    const filterBookmarks = (bookmarks) => {
        return bookmarks.filter((bookmark) => {
            // const matchesSearchTerm = bookmark.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            //     bookmark.tags.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesSearchTerm = bookmark.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                bookmark.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

            const createdDateMatch = createdDateFilter === '' || checkDateMatch(bookmark.createdAt, createdDateFilter);
            const modifiedDateMatch = modifiedDateFilter === '' || checkDateMatch(bookmark.updatedAt, modifiedDateFilter);

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

    if (status === 'loading') {
        return <p className='p-2'>Loading...</p>;
    }

    if (status === 'failed') {
        return <p className='p-2'>Error: {error}</p>;
    }

    return (
        <div style={{ width: '90%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Divider />

            <div style={styles.filterContainer}>
                <div style={styles.searchContainer}>
                    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} style={styles.searchInput} />
                </div>
                <Dropdown filterType="Created Date" selectedDate={createdDateFilter} handleDateChange={setCreatedDateFilter} />
                <Dropdown filterType="Modified Date" selectedDate={modifiedDateFilter} handleDateChange={setModifiedDateFilter} />

            </div>

            <div style={styles.cardsContainer}>
                <BookmarkCards bookmarks={filterBookmarks(bookmarks)} />
            </div>
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
    filterContainer: {
        width: '80%',
        marginBottom: '20px',
        marginTop: '20px',
        display: 'flex',
        gap: '15px',
        alignItems: 'center',
        justifyContent: 'center'
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
    }
};

export default BookmarkList