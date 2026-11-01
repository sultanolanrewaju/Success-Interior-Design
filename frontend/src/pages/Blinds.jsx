import React, { useState,useEffect } from 'react'
import Axios from "axios"
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import { Data } from '../Data'
import Footer from '../components/Footer'
import ServiceAreaMap from '../components/ServiceAreaMap'
import ContactFrom from '../components/ContactFrom'
import SEO from '../components/SEO'
import BookingForm from '../components/BookingForm'
import { Loader, Ruler, ShieldCheck } from 'lucide-react'
import Whatsapp from '../components/Whatsapp'
import Novalue from "../components/Novalue"




const Blinds = () => {
  const [products,setProducts] = useState([])
  const [booking,setBooking] = useState(false)
    const [blind, setBlind] = useState("")
    const [isloading,setIsLoading] = useState(true)
    const [category,setCategory] = useState("")
    
  useEffect(()=>{
     const Fetch = async()=>{
    try {
      setIsLoading(true)
      setCategory("Home")
        const response = await Axios.get(`https://success-interior-design-1.onrender.com/api/products?category=${category}`)
       setProducts(response.data.data)
    } catch (error) {
      console.log("Error While Fetching:",error)
    }finally{
  setIsLoading(false)
    }
    }
    Fetch()
  },[])

  return (
    <>
    <SEO 
        title="Explore Our Blinds Collection"
        description="Browse laser-measured custom roller, zebra, and motorized blinds designed for effortless privacy and smart home sync."
        url="https://successinteriordesign.com.ng/blinds"
      />
      <Navbar />

      {/* Hero Section */}
      <div className='bg-[#031853] pt-32 pb-16 px-4 sm:px-6 md:px-8 text-center text-white flex flex-col justify-center items-center relative overflow-hidden'>
        {/* Subtle Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-[#031853] to-[#031853] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-1.5 rounded-full text-xs font-semibold text-[#FFBD00] uppercase tracking-widest mb-1 shadow-inner">
            <ShieldCheck className="h-4 w-4 text-[#FFBD00]" />
            <span>Precision Measured & Delivered</span>
          </div>

          <h1 className='text-3xl sm:text-5xl lg:text-6xl text-white font-extrabold leading-tight tracking-tight drop-shadow-md text-center'>
            Get Any Type of <span className='text-[#FFBD00]'>BLINDS</span> at Your Doorstep.
          </h1>

          <p className="text-sm sm:text-base text-blue-100/80 max-w-2xl mx-auto font-light leading-relaxed">
            Explore our custom collection designed for laser fitting, smart home sync, and zero-mess installation.
          </p>
        </div>
      </div>

      {/* Featured Blinds Section */}
      <section className='mt-12 mb-16'>
        <h2 className='text-center text-3xl sm:text-4xl text-[#031853] font-extrabold tracking-tight pb-2'>
          Featured Blinds
        </h2>

        {/* Category Buttons */}
        <div className="my-6 flex gap-3 overflow-x-auto pb-3 justify-start sm:justify-center px-4 no-scrollbar">
          <button  className="cursor-pointer whitespace-nowrap rounded-full px-6 py-2.5 text-sm font-extrabold transition-all duration-300 border-2 shadow-sm shrink-0 flex items-center justify-center bg-slate-50 text-[#031853] border-slate-200 hover:border-[#031853] hover:bg-slate-100 focus:bg-[#FFBD00] text-[#031853] border-[#FFBD00] scale-105 shadow-md" onClick={()=>{setCategory("Blind")}}>Home</button>
                    <button  className="cursor-pointer whitespace-nowrap rounded-full px-6 py-2.5 text-sm font-extrabold transition-all duration-300 border-2 shadow-sm shrink-0 flex items-center justify-center bg-slate-50 text-[#031853] border-slate-200 hover:border-[#031853] hover:bg-slate-100 focus:bg-[#FFBD00] text-[#031853] border-[#FFBD00] scale-105 shadow-md">Office</button>
                          <button  className="cursor-pointer whitespace-nowrap rounded-full px-6 py-2.5 text-sm font-extrabold transition-all duration-300 border-2 shadow-sm shrink-0 flex items-center justify-center bg-slate-50 text-[#031853] border-slate-200 hover:border-[#031853] hover:bg-slate-100 focus:bg-[#FFBD00] text-[#031853] border-[#FFBD00] scale-105 shadow-md">Kitchen</button>
                                  <button  className="cursor-pointer whitespace-nowrap rounded-full px-6 py-2.5 text-sm font-extrabold transition-all duration-300 border-2 shadow-sm shrink-0 flex items-center justify-center bg-slate-50 text-[#031853] border-slate-200 hover:border-[#031853] hover:bg-slate-100 focus:bg-[#FFBD00] text-[#031853] border-[#FFBD00] scale-105 shadow-md">Toilet</button>


        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto px-4 sm:px-6">
         
          {
            isloading?(
            <Loader/>
            ):products.length > 0 ?(
 products.map((value, id) => {
            return (
              <Card key={id} item={value}  onQuote={()=>{
           setBlind(value.title);
           setBooking(true);
        }} />
            )
          })
            ):(
            <Novalue/>
            )
          }
   
        </div>
      </section>

      <ServiceAreaMap />
         {/* Booking Form Modal with close handler */}
    {
      booking && (
        <BookingForm 
          blind={blind} 
          onClose={() => setBooking(false)} 
        />
      )
    }
      {/* Whatsapp */}
      <Whatsapp />

      <Footer />
    </>
  )
}

export default Blinds