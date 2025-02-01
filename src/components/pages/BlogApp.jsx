import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Header from '../subcomponents/Header'
import AddBookmarkForm from '../subcomponents/AddBookmarkForm'
import BookmarkList from '../subcomponents/BookmarkList'
import bookmarkService from '../../services/bookmarks'
import { resetBookmarks } from '../../redux/features/bookmarkSlice';
import '../../index.css'


const BookmarksApp = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();

  useEffect(() => {
    const loggedInUserJSON = window.localStorage.getItem('loggedInUser');
    if (loggedInUserJSON) {
      const loggedInUser = JSON.parse(loggedInUserJSON);
      setUser(loggedInUser);
      bookmarkService.setToken(loggedInUser.token);
    }
    setLoading(false);
  }, []);


  const handleLogout = () => {
    setUser(null)
    window.localStorage.clear()
    bookmarkService.setToken(null);
    dispatch(resetBookmarks());
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate replace to="/login" />;
  }


  return (
    <>
      <main style={styles.container}>
        <Header user={user} handleLogout={handleLogout} />
        <AddBookmarkForm />
        <BookmarkList />

        {/* <div style={styles.container}>
          <BlogSection />
        </div> */}
      </main>
    </>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#1f2d36',
    color: '#ffffff',
    height: '100vh',
  },
}


export default BookmarksApp;