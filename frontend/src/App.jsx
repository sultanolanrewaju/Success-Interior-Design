import React from 'react'
import {Routes,Route } from 'react-router-dom'
// Pages
//  import Home from "./pages/Home"
import Blinds  from './pages/Blinds'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import AddBlinds from './pages/AddBlinds'
import Booking from './pages/Booking'
function App() {
return(    
<>
    <Routes>
      <Route path="/" element={<Home/>}/>
  <Route path="/add" element={<AddBlinds/>}/>
  <Route path="/blinds" element={<Blinds/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/contact" element={<Contact/>}/>
    <Route path="/booking" element={<Booking/>}/>
  <Route path="*" element={<NotFound/>}/>
    </Routes>
    </>
  )
}

export default App