import React from 'react'
import Navbar from '../components/Navbar'
import ContactForm from '../components/ContactFrom'
import Footer from '../components/Footer' 
import VisionCard from "../components/VisionCard"
import  ServiceAreaMap from "../components/ServiceAreaMap"
import { ShieldCheck, Clock, Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react'

const Contact = () => {
  return (
    <>
      <Navbar />

      {/* Hero Header Section */}
      <section className="bg-[#031853] text-white pt-32 pb-20 px-4 sm:px-6 md:px-8 text-center relative overflow-hidden">
        {/* Subtle radial background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-[#031853] to-[#031853] pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-1.5 rounded-full text-xs font-semibold text-[#FFBD00] uppercase tracking-widest shadow-inner">
            <ShieldCheck className="h-4 w-4 shrink-0 text-[#FFBD00]" />
            <span>Laser-Fit Certified Installers</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight drop-shadow-md">
            Let’s Get Your Windows <br className="hidden sm:inline" />
            <span className="text-[#FFBD00]">Measured to Perfection</span>
          </h1>

          {/* Subheading with optimal padding & line length */}
          <p className="text-sm sm:text-base md:text-lg text-blue-100/80 px-4 sm:px-6 md:px-8 max-w-2xl sm:max-w-3xl mx-auto font-light leading-relaxed">
            Questions about laser measurements, custom bracket mounting, motorized shades, or smart home sync? Message us — we usually reply within 30 minutes.
          </p>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-white border-b border-slate-200 py-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          
          <div className="flex items-center justify-center md:justify-start gap-4 p-3">
            <div className="p-3 bg-[#031853] text-[#FFBD00] rounded-2xl shrink-0">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <span className="text-xs text-slate-500 font-semibold block uppercase">Call or Text</span>
              <a href="https://shorturl.at/XcWTo" target='blank' className="text-sm font-bold text-[#031853] hover:text-[#FFBD00] transition">
               +234 (080) 732-12619
              </a>
            </div>
          </div>


          <div className="flex items-center justify-center md:justify-start gap-4 p-3">
            <div className="p-3 bg-[#031853] text-[#FFBD00] rounded-2xl shrink-0">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <span className="text-xs text-slate-500 font-semibold block uppercase">Email Support</span>
               <a href="mailto:vcentsuccess@gmail.com" target='blank' className="text-sm font-bold text-[#031853] hover:text-[#FFBD00] transition">
                vcentsuccess@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4 p-3">
            <div className="p-3 bg-[#031853] text-[#FFBD00] rounded-2xl shrink-0">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <span className="text-xs text-slate-500 font-semibold block uppercase">Response Time</span>
              <span className="text-sm font-bold text-[#031853]">Within 30 Minutes</span>
            </div>
          </div>

        </div>
      </section>






      {/* Main Contact Form & Details Section */}
      <ContactForm />
 <ServiceAreaMap/>
    <Footer/>
    </>
  )
}

export default Contact