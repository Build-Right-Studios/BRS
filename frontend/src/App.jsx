import { useState } from 'react'
import ComingSoon from './Components/landing.jsx'
import Nav from './Components/nav.jsx'
import LandingPage from './Components/nlanding.jsx'
import Footer from './Components/footer.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <ComingSoon /> 
      {/* <Nav /> */}
      {/* <LandingPage /> */}     
      {/* <Footer /> */}
    </>
  )
}

export default App
