import React from 'react'
import { IoLogoWhatsapp } from 'react-icons/io5';


const Whatsapp = () => {
  return (
    <>
    <a href="https://shorturl.at/XcWTo" target='blank'>
<div 
  className="fixed bottom-6 right-6 z-50 flex items-center justify-center cursor-pointer group"
>
  {/* Blinking Outer Signal Ring */}
  <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping" />

  {/* WhatsApp Main Button */}
  <IoLogoWhatsapp 
    size={56} 
    className="relative rounded-full bg-[#25D366] text-white p-3 shadow-[0_8px_25px_rgba(37,211,102,0.6)] group-hover:scale-110 active:scale-95 transition-all duration-300" 
  />

  {/* Live Active Blinking Green Badge */}
  <span className="absolute -top-1 -right-1 flex h-4 w-4">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
  </span>
</div>
</a>
    </>

  )
}

export default Whatsapp