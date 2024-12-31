import { useState } from "react";
import {
    Link
} from 'react-router-dom';
import { useOnlineStatus } from "../hooks/hooks";
import Notification from "./Notification";
import userService from '../services/user';

const RegisterForm = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [message, setMessage] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)

    const [loading, setLoading] = useState(true)
    const onlineStatus = useOnlineStatus()

    const closeMessage = () => {
        setMessage(null)
    }

    const closeError = () => {
        setErrorMessage(null)
    }

    const onRegister = async (event) => {
        event.preventDefault()
        try {
                const registrationResponse = await userService.register({ username, email, password })
                if (registrationResponse.status === 'success'){
                    setMessage(registrationResponse.message)
                    setTimeout(() => setMessage(null), 10000)
                    setEmail('')
                    setPassword('')
                    setUsername('')
                }               
                else {
                    throw new Error('registration failed');
                }
        } catch (exception) {
                setErrorMessage('Registration Failed! please try again')
                setTimeout(() => setErrorMessage(null), 5000)
        }
        
    }

    return (
        <div style={styles.loginContainer}>
            
            <div style={styles.loginBox}>
                <h1 style={styles.heading}>Register here</h1>
                <form style={styles.form} onSubmit={onRegister}>

                    {/* <label htmlFor='name' style={styles.label}>Your Name</label>
                    <input type='name' id='name' placeholder='Your Name'
                        value={name} onChange={({ target }) => setName(target.value)}
                        required style={styles.input} /> */}

                    <label htmlFor='username' style={styles.label}>Username</label>
                    <input type='username' id='username' placeholder='Username'
                        value={username} onChange={({ target }) => setUsername(target.value)}
                        required style={styles.input} />

                    <label htmlFor='email' style={styles.label}>Email</label>
                    <input type='email' id='email' placeholder='Email'
                        value={email} onChange={({ target }) => setEmail(target.value)}
                        required style={styles.input} />

                    <label htmlFor='password' style={styles.label}>Password</label>
                    <input type='password' id='password' placeholder='Password'
                        value={password} onChange={({ target }) => setPassword(target.value)}
                        required style={styles.input} />

                    <button type='submit' disabled={!onlineStatus} style={styles.button}>Register</button>
                    {(!onlineStatus && <div style={styles.statusText}> could not proceed with registration, you are currently offline</div>)}

                </form>
                <div style={styles.registerSection}>
                    <span>Already have an account? </span>
                    <Link to='/login' style={styles.registerLink}>Login here</Link>
                </div>
                <Notification successMessage={message} onSuccClose={closeMessage}
                    errorMessage={errorMessage} onErrClose={closeError} />
            </div>
            <div style={styles.rightPanel}>
                <h2 style={styles.rightHeading}>Struggling to keep you favorite blogs and other links in one place?</h2>
                <p style={styles.rightText}>
                    Introducing BlogList.<br />
                    Place all your favorite blog links, websites, song lyrics or any other links of your choice in one place. Add description for quick review or add tags for easy search.</p>
                <a href='https://github.com/NiveditaBSM/save-blogs' target='_blank' rel='noopener noreferrer'
                    style={styles.learnMore}>Learn more →</a>
            </div>
        </div>
    );
};

// Styles object
const styles = {
    loginContainer: {
        display: 'flex',
        height: '100vh',
        width: '100vw',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        overflow: 'hidden',
        justifyContent: 'center',
    },
    loginBox: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', /* Centers horizontally */
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
        color: '#555',
        textDecoration: 'none',
        marginLeft: '5px',
        cursor: 'pointer',
    },
};

export default RegisterForm;
