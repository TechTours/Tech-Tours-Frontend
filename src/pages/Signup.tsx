import { useState } from 'react'
import FormsLayout from '../components/User/FormsLayout'
import SideLayout from '../components/User/SideLayout'
import SignupForm from '../components/User/SignupForm'



function SignupPage() {
  const [count, setCount] = useState(0)

  return (
  <FormsLayout  sideBarComponent={SideLayout} formComponent={SignupForm}  />
  )
}

export default SignupPage
