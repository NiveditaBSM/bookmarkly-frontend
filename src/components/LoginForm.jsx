import { useState } from "react";

const LoginForm = ({ handleLogin }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onLogin = async (event) => {
        event.preventDefault()

        try {
            await handleLogin({ username, password })
            setUsername('')
            setPassword('')
        } catch (exception) {
            console.log(exception)
        }
    }

    return (
        <div style={styles.loginContainer}>
            <div style={styles.loginBox}>
                <h1 style={styles.heading}>Log in to your account</h1>
                <form style={styles.form} onSubmit={onLogin}>
                    <label htmlFor='email' style={styles.label}>Username</label>
                    <input type='username' id='username' placeholder='Username'
                        value={username} onChange={({ target }) => setUsername(target.value)}
                        required style={styles.input} />
                    <label htmlFor='email' style={styles.label}>Password</label>
                    <input type='password' id='password' placeholder='Password'
                        value={password} onChange={({ target }) => setPassword(target.value)}
                        required style={styles.input} />
                    <button type='submit' style={styles.button}>Login</button>
                </form>
                <div style={styles.registerSection}>
                    <span>Don’t have an account? </span>
                    <a href="#" style={styles.registerLink}>Register here</a>
                </div>
            </div>
            <div style={styles.rightPanel}>
                <h2 style={styles.rightHeading}>Keep all your favorite blogs in one place</h2>
                <p style={styles.rightText}>
                    Introducing Blog List.<br />
                    Place all your favorite blogs in one place, create notes on these blogs and tag them for easy search.</p>
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
        padding: '40px',
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
        padding: '40px',
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
};

export default LoginForm;
