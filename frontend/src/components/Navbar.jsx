import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const links = [
    ['Home', '/'],
    ['Blinds', '/blinds'],
    ['About', '/about'],
    ['Contact', '/contact']
  ]

  return (
    <header className="bg-white/95 fixed inset-x-0 top-0 z-50 backdrop-blur-md shadow-sm border-b border-slate-100">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        
        {/* Brand Logo (Root relative path /logo.png) */}
        <Link to="/" className="flex items-center gap-3">
          <div className="h-12 w-auto max-w-[160px] flex items-center justify-center">
            <img 
              src="/logo.png" 
              alt="Success Interior Design Logo" 
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map(([title, path]) => (
            <Link 
              key={title} 
              to={path} 
              className="text-base font-semibold text-[#031853] transition-colors duration-200 hover:text-[#FFBD00]"
            >
              {title}
            </Link>
          ))}
        </nav>

        {/* EliteGuard-Style Blinking CTA Button (Desktop) */}
        <div className="hidden lg:block relative group">
          <span className="absolute -inset-1 rounded-full bg-[#FFBD00] opacity-75 animate-ping pointer-events-none" />
          <span className="absolute -inset-1 rounded-full bg-[#FFBD00] opacity-50 blur-md group-hover:opacity-100 transition duration-300" />

          <Link to="/contact">
            <button className="relative bg-[#FFBD00] hover:bg-yellow-400 text-[#031853] font-extrabold text-sm px-6 py-2.5 rounded-full shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2">
              <span>Book Installation</span>
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="lg:hidden p-2 rounded-xl text-[#031853] hover:bg-slate-100 transition-colors cursor-pointer" 
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE DRAWER MENU (Controlled Internally) */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#031853] border-t border-white/10 px-6 py-6 shadow-2xl relative z-50">
          <div className="flex flex-col space-y-2">
            {links.map(([title, path]) => (
              <Link
                key={title}
                to={path}
                onClick={() => setMobileOpen(false)}
                className="w-full text-left py-3 text-lg font-bold text-white hover:text-[#FFBD00] border-b border-white/10 transition-colors duration-200 flex items-center justify-between"
              >
                <span>{title}</span>
              </Link>
            ))}

            {/* Mobile Blinking CTA Button */}
            <div className="pt-6 relative">
              <span className="absolute inset-x-0 bottom-0 top-6 rounded-xl bg-[#FFBD00] opacity-75 pointer-events-none" />
              
              <Link to="/contact" onClick={() => setMobileOpen(false)}>
                <button className="w-full relative bg-[#FFBD00] active:bg-yellow-400 text-[#031853] font-extrabold text-base py-4 rounded-xl shadow-xl cursor-pointer flex items-center justify-center gap-2.5">
                  <span>Book Installation</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar