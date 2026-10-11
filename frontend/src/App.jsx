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


export default function App() {
//   const [mobileOpen, setMobileOpen] = useState(false)
//   const [selectedProduct, setSelectedProduct] = useState(null)
//   const [bookingOpen, setBookingOpen] = useState(false)
//   const [bookStep, setBookStep] = useState(1)
//   const [bookData, setBookData] = useState({
//     service: 'Free In-Home Measurement',
//     date: '',
//     time: 'Morning (9am–12pm)',
//     name: '',
//     phone: '',
//     email: '',
//     address: '',
//     notes: ''
//   })

//   const openBooking = (prefill = {}) => {
//     setBookData((d) => ({ ...d, ...prefill }))
//     setBookStep(1)
//     setBookingOpen(true)
//   }

//   const resetBooking = () => {
//     setBookingOpen(false)
//     setBookStep(1)
//     setBookData({
//       service: 'Free In-Home Measurement',
//       date: '',
//       time: 'Morning (9am–12pm)',
//       name: '',
//       phone: '',
//       email: '',
//       address: '',
//       notes: ''
//     })
//   }

  return (
    // <div className="min-h-screen overflow-x-hidden bg-[#111313] text-[#f7f5ef]">
    //   <Navbar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} openBooking={() => openBooking({})} />

    // <Home openBooking={openBooking} setSelectedProduct={setSelectedProduct} />

    //   <Footer />

    //   <AnimatePresence>
    //     {selectedProduct && (
    //       <ProductModal
    //         item={selectedProduct}
    //         close={() => setSelectedProduct(null)}
    //         quote={() => {
    //           const itemTitle = selectedProduct.title
    //           setSelectedProduct(null)
    //           openBooking({ service: 'Custom Design Consultation', notes: `Interested in ${itemTitle}.` })
    //         }}
    //       />
    //     )}
    //   </AnimatePresence>

    //   <AnimatePresence>
    //     {bookingOpen && (
    //       <BookingModal
    //         data={bookData}
    //         setData={setBookData}
    //         step={bookStep}
    //         setStep={setBookStep}
    //         close={resetBooking}
    //       />
    //     )}
    //   </AnimatePresence>
    // </div>
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