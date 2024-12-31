import { useState, useEffect } from "react"
import {
    Link,
    Navigate,
    useNavigate
} from 'react-router-dom'
import Notification from "./Notification"
import userService from '../services/user'
import blogService from '../services/blogs'
import { useOnlineStatus } from "../hooks/hooks"

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)
    //const [successMessage, setSuccessMessage] = useState(null)
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()
    const onlineStatus = useOnlineStatus()

    useEffect(() => {
        const loggedInUserJSON = window.localStorage.getItem('loggedInUser');
        if (loggedInUserJSON) {
            const loggedInUser = JSON.parse(loggedInUserJSON);
            setUser(loggedInUser);
            blogService.setToken(loggedInUser.token);
        }
        setLoading(false);
    }, []);

    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            const loggedInUser = await userService.login({ email, password })

            setUser(loggedInUser)
            blogService.setToken(loggedInUser.token)
            const loggedInUserJSON = JSON.stringify(loggedInUser)
            window.localStorage.setItem('loggedInUser', loggedInUserJSON)

            setEmail('')
            setPassword('')

            navigate('/')

        } catch (exception) {
            setErrorMessage('login failed! please provide valid credentials')
            setTimeout(() => setErrorMessage(null), 5000)
        }
    }

    if (loading) {
        return <div>Loading...</div>; // Display a loading message while checking user
    }

    if (user) {
        return <Navigate replace to="/" />;  // Redirect if user is logged in
    }

    return (
        <>
            <Notification errorMessage={errorMessage} successMessage={null} onErrClose={() => setErrorMessage(null)} onSuccClose={null} />
            <div style={styles.loginContainer}>
                <div style={styles.loginBox}>
                    <h1 style={styles.heading}>Log in to your account</h1>

                    <form style={styles.form} onSubmit={handleLogin}>

                        <label htmlFor='email' style={styles.label}>Email</label>
                        <input type='email' id='email' placeholder='Email ID'
                            value={email} onChange={({ target }) => setEmail(target.value)}
                            required style={styles.input} />

                        <label htmlFor='email' style={styles.label}>Password</label>
                        <input type='password' id='password' placeholder='Password'
                            value={password} onChange={({ target }) => setPassword(target.value)}
                            required style={styles.input} />

                        <button disabled={!onlineStatus} type='submit' style={styles.button}>Login</button>
                        {(!onlineStatus && <div style={styles.statusText}> could not proceed with login, you are currently offline</div>)}

                    </form>

                    <div style={styles.registerSection}>
                        <span>Don’t have an account? </span>
                        <Link style={styles.registerLink} to='/register'>Register here</Link>
                    </div>

                </div>

                <div style={styles.rightPanel}>
                    <h2 style={styles.rightHeading}>Struggling to keep you favorite blogs and other links in one place?</h2>
                    <p style={styles.rightText}>
                        Introducing BlogList.<br />
                        Place all your favorite blog links, websites, song lyrics or any other links of your choice in one place. Add description for quick review or add tags for easy search.</p>
                    <a href='https://github.com/NiveditaBSM/save-blogs' target='_blank' rel='noopener noreferrer'
                        style={styles.learnMore}>Learn more →</a>
                </div>

            </div >
        </>
    );
};

// Styles object
const styles = {
    loginContainer: {
        display: 'flex',
        height: '100vh',
        width: '100%',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        overflow: 'hidden',
        justifyContent: 'center',
    },
    loginBox: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100vh',
        padding: '0 40px',
        backgroundColor: '#ffffff',

    },
    heading: {
        fontSize: '24px',
        marginBottom: '20px',
        color: '#1f2d36',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    label: {
        marginBottom: '8px',
        fontSize: '14px',
        color: '#555',
    },
    input: {
        padding: '12px',
        marginBottom: '20px',
        borderRadius: '5px',
        border: '1px solid #ddd',
        fontSize: '16px',
        // maxWidth: '25rem'
    },
    button: {
        padding: '12px',
        fontSize: '16px',
        backgroundColor: '#4CAF50',
        color: '#ffffff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    rightPanel: {
        width: '50%',
        padding: '0 40px',
        backgroundColor: '#1f2d36',
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    rightHeading: {
        fontSize: '22px',
        marginBottom: '15px',
    },
    rightText: {
        fontSize: '16px',
        marginBottom: '20px',
        lineHeight: '1.5',
    },
    learnMore: {
        color: '#4CAF50',
        textDecoration: 'none',
        fontSize: '16px',
    },
    registerSection: {
        marginTop: '20px',
        fontSize: '14px',
        color: '#555',
        display: 'flex',
        justifyContent: 'center',
    },
    registerLink: {
        color: '#4CAF50',
        textDecoration: 'none',
        marginLeft: '5px',
        cursor: 'pointer',
    },
    statusText: {
        //color: '#4CAF50',
        marginTop: '0.2rem',
        fontSize: '12px',
        color: '#555',
        display: 'flex',
        justifyContent: 'center',
        textDecoration: 'none',
        marginLeft: '5px',
        cursor: 'pointer',
    },
};

export default LoginForm;
