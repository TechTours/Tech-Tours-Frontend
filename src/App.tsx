import { useState } from 'react'
import ForgotPage from './pages/ForgotPassword'
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'
import SignupPage from './pages/Signup'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router , Route  , Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
    <Router>
    <Routes>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/signup" element={<SignupPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/forgot" element={<ForgotPage />} />
    <Route path='/' element={<HomePage />} />
    </Routes>
    </Router>
    </div>
  )
}

export default App
