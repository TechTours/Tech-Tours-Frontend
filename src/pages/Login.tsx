import { useState } from 'react'
import FormsLayout from '../components/FormsLayout'
import SideLayout from '../components/User/SideLayout'
import LoginForm from '../components/LoginForm'


function LoginPage() {
  const [count, setCount] = useState(0)

  return (
  <FormsLayout  sideBarComponent={SideLayout} formComponent={LoginForm}  />
  )
}

export default LoginPage
