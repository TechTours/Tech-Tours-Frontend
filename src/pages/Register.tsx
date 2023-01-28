import { useState } from 'react'
import FormsLayout from '../components/FormsLayout'
import SideLayout from '../components/SideLayout'
import RegisterForm from '../components/RegisterForm'



function RegisterPage() {

  return (
  <FormsLayout  sideBarComponent={SideLayout} formComponent={RegisterForm}  />
  )
}

export default RegisterPage
