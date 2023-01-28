import { useState } from 'react'
import FormsLayout from '../components/FormsLayout'
import SideLayout from '../components/SideLayout'
import SignupForm from '../components/SignupForm'



function SignupPage() {
  const [count, setCount] = useState(0)

  return (
  <FormsLayout  sideBarComponent={SideLayout} formComponent={SignupForm}  />
  )
}

export default SignupPage
