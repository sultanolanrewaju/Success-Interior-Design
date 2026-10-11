import React from 'react'
import Navbar from '../components/Navbar'
import { Phone,MessageCircle } from 'lucide-react'
import Footer from '../components/Footer'
import Whatsapp from '../components/Whatsapp'
import VisionCard from '../components/VisionCard'
const About = () => {
  return (
    <>
    <Navbar/>
    <div className='bg-[#031853] h-[80vh] pt-27 text-center text-white'>
    <span className='text-xl font-bold'>About Us</span>
    <h1 className='text-3xl sm:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-md px-60'>We Deliver the Best and Awesome Blind at <span  className="text-[#FFBD00]">Success Interior Design</span></h1>
    </div>

{/* Story And Vision */}
<section>
      <h2 className='text-center text-5xl font-bold py-10 text-[#031853]'>Our Vision</h2>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mb-15 px-4 sm:px-6">
       <VisionCard text="Soft fabric folding treatments require delicate handling, custom wall anchors for heavy headers, and post-installation steam tuning to ensure clean, uniform pleat drops."/>
      <VisionCard text="Solid timber and faux-wood slats add significant weight to window frames. We install heavy-duty steel headrail brackets and tune internal tilt-rods for smooth, snag-free operation."/>
      <VisionCard text="Alternating light-filtering and solid privacy bands require meticulous level-mounting. Even a 2-millimeter skew will throw off the horizontal stripe alignment across multi-window banks."/>

 </div>

</section>

{/* TEAMS */}
    <section className='bg-[#031853]'>
      <h2 className='text-center text-5xl font-bold pt-10 text-white'>Our Teams</h2>
   <div className='flex justify-center items-center p-10'>
<div className='w-auto'>
  <img src="../fixer.jpeg" alt="" className='w-300 rounded-2xl'/>
</div>
<div className=' pt-20 pl-5'>
  <h2 className='text-5xl pl-2 pb-5 text-white'>Vcent <span className='text-2xl text-white/80'>CEO</span></h2>
  <p className='pr-60 pl-2 pb-5 font-xl font-medium text-white'>Vcent is a professional window blind expertise. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo cupiditate, ea aliquam excepturi repudiandae tenetur voluptatum facilis incidunt quidem obcaecati similique, quae consequuntur corrupti labore iusto voluptate error, esse est.</p>
 <div className="flex ml-2 gap-[2em]">
<a href="https://shorturl.at/XcWTo" target='blank'>   <button className='flex  bg-[#FFBD00] px-4 py-2 rounded-md text-xl text-black items-center justify-center gap-2 cursor-pointer'><Phone size={20}/>Contact</button></a>
  <button className='flex bg-[#FFBD00] px-4 py-2 rounded-md text-black text-xl items-center justify-center gap-2 cursor-pointer'><MessageCircle/>Message</button>
 </div>
</div>
   </div>
    </section>
{/* Whatsapp */}
<Whatsapp/>

    <Footer/>
    </>
  )
}

export default About