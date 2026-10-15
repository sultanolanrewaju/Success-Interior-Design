import React, { useState } from 'react'
import Navbar from "../components/Navbar"
import Hero from '../components/Hero'
import Card from "../components/Card"
import Footer from "../components/Footer"
import { Data } from '../Data'
import Step from '../components/Step'

import { Ruler, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react'
import Brands from '../components/Brands'
import ServiceAreaMap from '../components/ServiceAreaMap'
import { SmoothCaret } from '../components/SmoothCaret'
import ContactFrom from '../components/ContactFrom'
import BookingForm from '../components/BookingForm'
import Whatsapp from '../components/Whatsapp';
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'


// SEO

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeGoodsStore",
  "name": "Success Interior Design",
  "description": "Custom window blinds, precision measurement, and certified mounting services.",
  "url": "https://successinteriordesign.com.ng",
  "telephone": "+23408073212619", 
  "priceRange": "₦70,000",
  "areaServed": "Nigeria",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Window Treatment Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "In-Home Blind Measurement & Consultation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Motorized Shade Installation"
        }
      }
    ]
  }
}
  

const steps = [
  {
    number: '01',
    title: 'Measure & Consult',
    img:"../blind.jpeg",
    icon: Ruler,
    description:
      'We bring fabric samples directly to your home, assess your lighting needs, and take laser-precise window measurements for a guaranteed fit.',
    badge: 'Free In-Home Visit'
  },
  {
    number: '02',
    title: 'Custom Crafting',
    img:"../fixer.jpeg",
    icon: Sparkles,
    description:
      'Your window coverings are custom-tailored to your exact specifications using high-grade light-filtering, blackout, or thermal fabrics.',
    badge: 'Precision Made'
  },
  {
    number: '03',
    title: 'Expert Installation',
    img:"../room.jpeg",
    icon: ShieldCheck,
    description:
      'Our certified installation specialists handle complete mounting, motorization pairing, and smart home synchronization in just one visit.',
    badge: '5-Year Warranty'
  }
]

const Home = () => {
  const [booking, setBooking] = useState(false)
  const [blind, setBlind] = useState("")

  return (
    <>
     <SEO 
        title="Success Interior Design || Custom Window Blinds & Installation"
        description="Transform your home with custom-tailored light-filtering, thermal, and motorized blinds. Book a free in-home measurement visit today!"
        url="https://successinteriordesign.com.ng"
        schema={localBusinessSchema}
      />
    <Navbar/>
    <Hero/>

    {/* Products Section */}
    <div className="products">
      <h1 className='text-[40px] font-extrabold text-center py-20'>Get your Amazing window blind Installed</h1>
       
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto px-4 sm:px-6">
         {
        Data.map((value, id)=>{
          return(
        <Card key={id} item={value} onQuote={()=>{
           setBlind(value.title);
           setBooking(true);
        }}/>
          )
        })
       }
    </div>
    <center>
 <Link to="blinds"><button className='px-15 py-3 bg-[#031853] rounded-sm text-white text-xl my-10  cursor-pointer'>See More</button>
</Link>
    </center>
    </div>

   {/* How it Works */}
<div className="bg-[#031853] py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 text-white">
  <div className="max-w-7xl mx-auto text-center space-y-4 mb-10 md:mb-14">
    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-md">
      How it Works
    </h1>
    <p className="text-sm sm:text-base text-blue-100/80 max-w-2xl mx-auto font-light leading-relaxed">
      We handle every detail of your custom window blinds so you can enjoy effortless light control and privacy.
    </p>
  </div>

  {/* Responsive Step Cards Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto items-stretch">
    {steps.map((step) => (
      <Step 
        key={step.number} 
        number={step.number} 
        img={step.img} 
        title={step.title} 
        desc={step.description} 
        Icon={step.icon}
      />
    ))}
  </div>

  {/* CTA Button Wrapper */}
  <div className="flex justify-center mt-12 sm:mt-16">
    <button 
      onClick={() => { 
        setBlind("General Blind"); 
        setBooking(true); 
      }} 
      className="bg-[#FFBD00] text-[#031853] px-8 py-3.5 rounded-xl font-extrabold text-base hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-yellow-500/20 transform hover:-translate-y-0.5 cursor-pointer"
    >
      Book Our Service
    </button>
  </div>
</div>

    {/* Brands */}
    <section className="bg-[#031853] py-8 border-y border-white/10 overflow-hidden relative mt-10 mb-20 h-130">
      <h1 className='text-center text-5xl pt-10 pb-4 font-extrabold text-white'>Brands we work with</h1>
      <p className='text-white font-bold pl-20 pr-20 text-center'>We've gotten 90% of your Products from this remarkable brands.</p>
      <Brands/>
    </section>

    {/* Booking Form Modal with close handler */}
    {
      booking && (
        <BookingForm 
          blind={blind} 
          onClose={() => setBooking(false)} 
        />
      )
    }

    {/* Whatsapp Icon */}
    <Whatsapp/>

    <ContactFrom/>
    <ServiceAreaMap/>
    <Footer/>
    </>
  )
}

export default Home