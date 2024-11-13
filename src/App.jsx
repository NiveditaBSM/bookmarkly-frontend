import {
  Routes, Route
} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import BlogApp from './components/BlogApp'
import './index.css'

const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<BlogApp />} />
        <Route path='/register' element={<RegisterForm />} />
        <Route path='/login' element={<LoginForm />} />
      </Routes >
    </>
  )
}



export default App