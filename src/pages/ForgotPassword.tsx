import React , {useState} from 'react'
import FormsLayout from '../components/FormsLayout'
import ForgotPassword from '../components/User/ForgotPasswordForm'
import SideLayout from '../components/User/SideLayout'


function ForgotPage() {
  const [count, setCount] = useState(0)

  return (
  <FormsLayout  sideBarComponent={SideLayout} formComponent={ForgotPassword}  />
  )
}

export default ForgotPage
