import { useState } from 'react'
import reactLogo from './assets/react.svg'
import FormsLayout from './components/FormsLayout'
import SideLayout from './components/SideLayout'



function App() {
  const [count, setCount] = useState(0)

  return (
  <FormsLayout  sideBarComponent={SideLayout} />
  )
}

export default App
