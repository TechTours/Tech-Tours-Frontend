import React , {useState} from 'react'
import FormsLayout from '../components/FormsLayout'
import ForgotPassword from '../components/ForgotPasswordForm'
import SideLayout from '../components/SideLayout'


function ForgotPage() {
  const [count, setCount] = useState(0)

  return (
  <FormsLayout  sideBarComponent={SideLayout} formComponent={ForgotPassword}  />
  )
}

export default ForgotPage
