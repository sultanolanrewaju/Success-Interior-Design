import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import { Data } from '../Data'
import Footer from '../components/Footer'
import ServiceAreaMap from '../components/ServiceAreaMap'
import ContactFrom from '../components/ContactFrom'

import { Ruler,ShieldCheck } from 'lucide-react'
import Whatsapp from '../components/Whatsapp'

const Blinds = () => {
  
  const types = ["Office","Kitchen","Home","Toilet"]
  return (
    <>
    <Navbar/>
    {/* <div className='absolute bg-black/20 h-[70vh] w-[100%] top-0 '></div> */}
    <div className=' bg-[#031853] h-[320px]'>
        <h1 className='text-4xl sm:text-6xl pl-20 text-white  font-extrabold leading-tight mb-6 drop-shadow-md text-center pt-35'>Get Any Types of  <span className='text-[#FFBD00]'>BLINDS</span> at your doorstep.</h1>
    </div>
    <section className='mt-10 mb-7'>
  <h2 className='text-center text-3xl text-[#031853] font-bold pb-4'>Featured Blinds</h2>
    <div className=" my-5 flex gap-2 overflow-x-auto pb-2 justify-center no-scrollbar">
          {/* {categoryKeys.map((c) => (
            <button key={c} onClick={() => setCategory(c)} className={`whitespace-nowrap rounded-full border px-5 py-2.5 text-sm transition ${category === c ? 'border-[#c5a46d] bg-[#c5a46d] text-[#171817]' : 'border-white/10 bg-white/[.03] text-white/65 hover:border-white/20 hover:text-white'}`}>
              {c}
            </button>
          ))} */}
          {
            types.map((data,index)=>{
              return(
                <button className= "cursor-pointer whitespace-nowrap rounded-full border px-6 py-1 text-[16px] transition border-[#031853] bg-[#FFBD00]  text-[#000000]">{data}</button>
              )              
            })
          }

        </div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto px-4 sm:px-6">
     {
    Data.map((value,id)=>{
      return(
    <Card key={id} item={value}/>
      )
    })
   }
</div>
  {/* <div className="mt-10 flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {categoryKeys.map((c) => (
            <button key={c} onClick={() => setCategory(c)} className={`whitespace-nowrap rounded-full border px-5 py-2.5 text-sm transition ${category === c ? 'border-[#c5a46d] bg-[#c5a46d] text-[#171817]' : 'border-white/10 bg-white/[.03] text-white/65 hover:border-white/20 hover:text-white'}`}>
              {c}
            </button>
          ))}
          <button className= "whitespace-nowrap rounded-full border px-5 py-2.5 text-sm transition 'border-[#c5a46d] bg-[#c5a46d] text-[#000000]">Kitchen</button>
          <button className= "whitespace-nowrap rounded-full border px-5 py-2.5 text-sm transition 'border-[#c5a46d] bg-[#c5a46d] text-[#000000]">Kitchen</button>


        </div> */}
</section>
<ServiceAreaMap/>
{/* Whatsapp */}
<Whatsapp/>

    <Footer/>
    </>
  )
}

export default Blinds