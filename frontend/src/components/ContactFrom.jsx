import React, { useState } from 'react'
import { SmoothCaret } from './SmoothCaret'
import { User, Mail, MessageSquare, Tag, CheckCircle2, ArrowRight } from 'lucide-react'
import ServiceAreaMap from "../components/ServiceAreaMap" 
import Footer from "../components/Footer"

const ContactFrom = () => {
  const [showError, setShowError] = useState(false) // Toggle error banner visibility
  const [error, setError] = useState("") // Error message text
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  // Email Validation Helper
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const handleChange = (e) => {
    const {name,value} = e.target;
setFormData((prevData) => ({
    ...prevData,
    [name]: value
  }))
    // Clear error as user starts typing again
    if (showError) {
      setShowError(false)
      setError('')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // 1. Check if any field is empty
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setShowError(true)
      setError("Fill In Your Complete Credentials")
      return
    }

    // 2. Check if Email format is valid
    if (!validateEmail(formData.email.trim())) {
      setShowError(true)
      setError("Please Enter a Correct Email Address")
      return // Stops execution here so it doesn't submit
    }

    // 3. Success State
    setShowError(false)
    setError("")
    console.log('Submitted Message:', formData)
    alert('Thank you! Your inquiry has been sent. We will respond within 30 minutes.')
  }

  return (
    <>
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Direct Value Props & Expectation Setter */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <span className="bg-[#031853] text-[#FFBD00] text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider inline-block mb-3">
              Direct Contact
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#031853] tracking-tight">
              Send Us a Message
            </h2>
            <p className="pt-3 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              Whether you bought blinds from Hunter Douglas, Lutron, IKEA, or custom designer suppliers—our certified installation team is ready to measure, mount, and sync your window treatments.
            </p>
          </div>

          {/* What Happens Next Checklist */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#031853]">
              What Happens Next?
            </h3>
            
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700 font-medium">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#FFBD00] shrink-0 mt-0.5" />
                <span><strong>30-Min Response:</strong> We review your window layout and bracket requirements.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#FFBD00] shrink-0 mt-0.5" />
                <span><strong>Tailored Estimate:</strong> Receive a clear, zero-hidden-fee fitting proposal.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#FFBD00] shrink-0 mt-0.5" />
                <span><strong>In-Home Fitting:</strong> Precision laser measurement, mounting, and zero-mess cleanup.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Form with SmoothCaret Inputs */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
          
          {/* Error Banner */}
          <div className={showError ? 'w-full h-10 flex items-center justify-center bg-red-500/10 border border-red-500 text-red-500 text-center rounded-lg mb-4 font-bold text-sm' : 'hidden'}>
            <h1>{error}</h1>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            
            {/* Name Input - Added onChange prop */}
            <SmoothCaret
              name="name"
              label="Full Name"
              icon={User}
              placeholder="e.g. Sarah Jenkins"
              value={formData.name}
              onChange={handleChange}
            />

            {/* Email Input */}
            <SmoothCaret
              name="email"
              label="Email Address"
              type="email"
              icon={Mail}
              placeholder="e.g. sarah@example.com"
              value={formData.email || ''}          
              onChange={handleChange}    
            />

            {/* Subject Input */}
            <SmoothCaret
              name="subject"
              label="Subject / Project Type"
              icon={Tag}
              placeholder="e.g. Motorized Roller Shade Fitting"
              value={formData.subject}
              onChange={handleChange}
            />

            {/* Message Area */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-[#031853] uppercase tracking-wide px-1">
                Your Message / Window Details
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                placeholder="Tell us about your window sizes, mounting heights, or smart motorization needs..."
                className="w-full p-4 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#031853] focus:ring-2 focus:ring-[#031853]/20 transition duration-300"
                onChange={handleChange}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#031853] hover:bg-blue-950 text-[#FFBD00] font-extrabold text-base py-4 rounded-2xl shadow-lg flex items-center justify-center gap-3 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Send Message</span>
              <ArrowRight className="h-5 w-5" />
            </button>

          </form>
        </div>

      </div>
    </section>
    </>
  )
}

export default ContactFrom