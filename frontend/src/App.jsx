import React from 'react'
import {Routes,Route } from 'react-router-dom'
// Pages
import {Home1} from './pages/Home1'
// import Home from "./pages/Home"
import Blinds  from './pages/Blinds'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
function App() {
return(    
<>
    <Routes>
      <Route path="/" element={<Home/>}/>
  <Route path="/home" element={<Home1/>}/>
  <Route path="/blinds" element={<Blinds/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="*" element={<NotFound/>}/>
    </Routes>
    </>
  )
}

export default App