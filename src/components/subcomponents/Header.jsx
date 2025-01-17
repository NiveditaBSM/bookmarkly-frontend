import { FaSignOutAlt } from 'react-icons/fa'

const Header = ({ user, handleLogout }) => {


    return (
        <div style={{ width: '70%', display: 'flex', flexDirection: 'row', paddingTop: '1.5rem', justifyContent: 'space-between' }}>
            <h2 style={{}}>Welcome, {user.username}</h2>
            <span style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', cursor: 'pointer' }} onClick={handleLogout}>
                <h2 > Logout </h2>
                <FaSignOutAlt title='logout' />
            </span>
        </div>
    )

}

export default Header;