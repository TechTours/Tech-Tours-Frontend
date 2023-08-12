import { useState } from 'react'
import FormsLayout from '../components/User/FormsLayout'
import SideLayout from '../components/User/SideLayout'
import RegisterForm from '../components/User/RegisterForm'



function RegisterPage() {

  return (
  <FormsLayout  sideBarComponent={SideLayout} formComponent={RegisterForm}  />
  )
}

export default RegisterPage
