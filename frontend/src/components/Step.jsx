import React from 'react'
import { ArrowRight, ArrowUpRight, Award, CalendarDays, Check, ChevronDown, ChevronLeft, ChevronRight, Clock3, Crosshair, DoorOpen, Facebook, Home, Instagram, Lightbulb, Mail, MapPin, Menu, Minus, Phone, Plus, Ruler, ShieldCheck, Sparkles, Star, Sun, X, Zap } from 'lucide-react'


// Inside Step.jsx
const Step = ({ number, img, title, desc, Icon }) => {
  return (
    <div className="w-full h-full bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#FFBD00]/50 transition duration-300">
      <div className="space-y-4">
        {/* Top Header Row */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-black text-[#FFBD00]">{number}</span>
          {Icon && <Icon className="h-6 w-6 text-[#FFBD00]" />}
        </div>

        {/* Card Image */}
        {img && (
          <div className="w-full h-48 rounded-xl overflow-hidden">
            <img src={img} alt={title} className="w-full h-full object-cover" />
          </div>
        )}

        {/* Text Details */}
        <h3 className="text-xl font-bold text-white pt-2">{title}</h3>
        <p className="text-sm text-blue-100/70 font-normal leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

export default Step


// const Step = ({ number, img, title, desc, Icon }) => {
//   return (
//     <>
//       <div className="w-full max-w-sm min-h-[500px] bg-white/10 rounded-2xl my-5 p-5 flex flex-col justify-between border border-white/10">
        
//         {/* Card Header: Icon & Step Number */}
//         <div className="flex justify-between items-center mb-4">
//           <Icon className='rounded-full bg-[#FFBD00] text-[#031853] p-2 font-bold' size={44} />
//           <p className='rounded-full bg-[#FFBD00] text-[#031853] text-center px-2 py-1 text-lg font-extrabold'>
//             {number}
//           </p>
//         </div>

//         {/* Card Image */}
//         <div className="w-full h-56 rounded-xl overflow-hidden mb-4">
//           <img src={img} className='w-full h-full object-cover' alt={title} />
//         </div>

//         {/* Text Content with Balanced Padding */}
//         <div className="space-y-2 px-1">
//           <h2 className='text-2xl text-white font-extrabold leading-snug'>
//             {title}
//           </h2>
//           <p className='text-sm text-blue-100/80 font-medium leading-relaxed'>
//             {desc}
//           </p>
//         </div>

//       </div>
//     </>
//   )
// }

// export default Step