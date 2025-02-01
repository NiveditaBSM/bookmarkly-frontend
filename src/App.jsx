import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import LoginForm from './components/pages/LoginForm'
import RegisterForm from './components/pages/RegisterForm'
import BlogApp from './components/pages/BlogApp'
import LandingPage from './components/pages/LandingPage'
import UserLayout from './components/shared/UserLayout'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import PasswordReset from './components/pages/PasswordReset'
import './index.css'


const App = () => {

  const VerificationSuccess = () => {
    const navigate = useNavigate();

    useEffect(() => {
      const timer = setTimeout(() => {
        navigate('/login');
      }, 3000);

    }, []);

    return <h2>Verification Successful! Redirecting...</h2>;
  };

  const PageNotFound = () => {
    const navigate = useNavigate();

    useEffect(() => {
      const timer = setTimeout(() => {
        navigate('/');
      }, 5000);

    }, []);

    return (
      <div>
        <h2>404: Page Not Found</h2>
        <p>Redirecting to home...</p>
      </div>
    )
  };


  return (
    <>
      <Routes>
        <Route path='/' element={<BlogApp />} />
        <Route path='/home' element={<LandingPage />} />
        <Route path='/user' element={<UserLayout />}>
          <Route path='/user/login' element={<Login />} />
          <Route path='/user/register' element={<Register />} />
          <Route path='/user/passwordreset' element={<PasswordReset />} />
          <Route index element={<Navigate to='/user/login' replace />} />
        </Route>
        <Route path='/register' element={<RegisterForm />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/verification-success' element={<VerificationSuccess />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes >
    </>
  )
}



export default App