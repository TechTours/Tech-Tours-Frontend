import { useState } from 'react'
import FormsLayout from '../components/User/FormsLayout'
import SideLayout from '../components/User/SideLayout'
import LoginForm from '../components/User/LoginForm'


function LoginPage() {
  const [count, setCount] = useState(0)

  return (
  <FormsLayout  sideBarComponent={SideLayout} formComponent={LoginForm}  />
  )
}

export default LoginPage
