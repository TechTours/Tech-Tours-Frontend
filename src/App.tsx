import { useState } from 'react'
import ForgotPage from './pages/ForgotPassword'
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'
import SignupPage from './pages/Signup'


function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <ForgotPage />
      {/* <LoginPage /> */}
      {/* <RegisterPage /> */}
      {/* <SignupPage /> */}
    </div>
  )
}

export default App
