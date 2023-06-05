import { useState } from 'react'
import ForgotPage from './pages/ForgotPassword'
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'
import SignupPage from './pages/Signup'
import HomePage from './pages/HomePage'
import Report from './pages/Report'
import { BrowserRouter as Router , Route  , Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'


function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
    <Router>
    <Routes>
      // the normal user routes 
    <Route path="/login" element={<LoginPage />} />
    <Route path="/signup" element={<RegisterPage />} />
    <Route path="/forgot" element={<ForgotPage />} />
    <Route path='/' element={<HomePage />} />
    <Route path='/report' element={<Report />} />

    // the admin routes
    <Route path="/admin/register" element={<SignupPage />} />
    <Route path='/admin/dashboard' element={<Dashboard />} />

    </Routes>
    </Router>
    </div>
  )
}

export default App
