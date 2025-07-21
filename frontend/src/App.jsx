import { useState } from 'react'
import ComingSoon from './Components/landing.jsx'
import Nav from './Components/nav.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Nav /> */}
       <ComingSoon /> 
    </>
  )
}

export default App
