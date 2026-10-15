import React from 'react'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import { Phone, MessageCircle } from 'lucide-react'
import Footer from '../components/Footer'
import Whatsapp from '../components/Whatsapp'
import VisionCard from '../components/VisionCard'

const About = () => {
  return (
    <>
        {/* SEO Header */}
  <SEO 
        title="About Us | Our Vision |Our Values"
        description="We Provide the best,authentic window blind service in Nigeria."
        url="https://successinteriordesign.com.ng/blinds"
      />

      <Navbar />

      {/* Hero Header */}
      <div className='bg-[#031853] min-h-[50vh] lg:min-h-[60vh] pt-32 pb-16 px-4 sm:px-6 md:px-8 flex flex-col justify-center items-center text-center text-white'>
        <span className='text-xs sm:text-sm font-bold uppercase tracking-widest text-[#FFBD00] bg-white/10 px-4 py-1.5 rounded-full mb-4 border border-white/10'>
          About Us
        </span>
        <h1 className='text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-4xl mx-auto drop-shadow-md'>
          We Deliver the Best and Awesome Blinds at <span className="text-[#FFBD00]">Success Interior Design</span>
        </h1>
      </div>

      {/* Story And Vision Section */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className='text-3xl sm:text-5xl font-extrabold text-[#031853]'>
              Our Vision
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 font-medium">
              Precision mechanics, heavy-duty brackets, and millimeter-exact installation standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <VisionCard text="Soft fabric folding treatments require delicate handling, custom wall anchors for heavy headers, and post-installation steam tuning to ensure clean, uniform pleat drops." />
            <VisionCard text="Solid timber and faux-wood slats add significant weight to window frames. We install heavy-duty steel headrail brackets and tune internal tilt-rods for smooth, snag-free operation." />
            <VisionCard text="Alternating light-filtering and solid privacy bands require meticulous level-mounting. Even a 2-millimeter skew will throw off the horizontal stripe alignment across multi-window banks." />
          </div>
        </div>
      </section>

      {/* TEAMS SECTION */}
      <section className='bg-[#031853] py-16 sm:py-24 text-white overflow-hidden'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="bg-[#FFBD00]/10 border border-[#FFBD00]/30 text-[#FFBD00] text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider inline-block mb-2">
              Leadership & Expertise
            </span>
            <h2 className='text-3xl sm:text-5xl font-extrabold text-white'>
              Our Teams
            </h2>
          </div>

          {/* Flexible Layout: Stacks on mobile/tablet, side-by-side on desktop */}
          <div className='flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16'>
            
            {/* CEO Image Container */}
            <div className='w-full max-w-sm sm:max-w-md shrink-0'>
              <img 
                src="../fixer.jpeg" 
                alt="Vcent CEO" 
                className='w-full h-auto object-cover rounded-3xl border-4 border-white/15 shadow-2xl'
              />
            </div>

            {/* CEO Bio Content */}
            <div className='w-full lg:max-w-xl space-y-6 text-center lg:text-left'>
              <div>
                <h3 className='text-3xl sm:text-4xl font-extrabold text-white'>
                  Vcent <span className='text-lg sm:text-xl font-semibold text-[#FFBD00] ml-2 bg-white/10 px-3 py-1 rounded-full'>CEO & Master Fitter</span>
                </h3>
              </div>

              <p className='text-sm sm:text-base md:text-lg font-normal text-blue-100/90 leading-relaxed'>
                Vcent is a professional window blind technical specialist. Dedicated to turning standard retail window treatments into seamless, precision-mounted smart home features with zero-mess installation and flawless bracket alignment.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <a href="tel:(080) 732-12619 " target="_blank" rel="noopener noreferrer">
                  <button className='flex items-center gap-2 bg-[#FFBD00] hover:bg-yellow-400 px-6 py-3 rounded-xl text-base sm:text-lg font-bold text-[#031853] shadow-lg transition-all duration-300 cursor-pointer'>
                    <Phone size={20} />
                    <span>Contact Direct</span>
                  </button>
                </a>
                
                <a href="https://shorturl.at/XcWTo" target="_blank" rel="noopener noreferrer">
                  <button className='flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 rounded-xl text-base sm:text-lg font-bold text-white transition-all duration-300 cursor-pointer'>
                    <MessageCircle size={20} />
                    <span>WhatsApp Chat</span>
                  </button>
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <Whatsapp />

      {/* Footer */}
      <Footer />
    </>
  )
}

export default About