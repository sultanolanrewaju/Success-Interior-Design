import React,{useState} from 'react'
import { X,DoorOpen } from 'lucide-react'
import { motion } from 'framer-motion'




const BookingForm = (blind) => {
  const [hide,sethide] = useState(true)
  const close =()=>{
     sethide(false)
  }
    const [data,setData]=useState({
        // blind:"",
        name:"",
        phone:"",
        email:""
    })
  return (
    <>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={hide ? "fixed inset-0 z-[90] grid place-items-center bg-black/60 p-4 backdrop-blur-md" : "hidden"}>
      <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="max-h-[92vh] w-full max-w-xl overflow-auto rounded-[2rem] border border-white/10 bg-[] p-6 shadow-2xl md:p-8 ">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-bold tracking-[.2em] text-[#ffffff]">BOOK A VISIT</p>
            <h2 className="mt-2 font-display text-3xl    text-white"> You're on the list.</h2>
          </div>
          <button onClick={close} className="rounded-full p-2 bg-[#FFBD00] cursor-pointer"><X/></button>
        </div>
           <div className="mt-8 grid gap-4">
                        <input placeholder="Blind" value={blind} onChange={(e) => setData('blind', e.target.value)} className="rounded-xl border border-white/10 bg-white/[.03] px-4 py-3.5 outline-none placeholder:text-white/20  text-white" />
            <input placeholder="Full name" value={data.name} onChange={(e) => setData('name', e.target.value)} className="rounded-xl border border-white/10 bg-white/[.03] px-4 py-3.5 outline-none placeholder:text-white/20  text-white" />
            <input placeholder="Phone number" value={data.phone} onChange={(e) => setData('phone', e.target.value)} className="rounded-xl border border-white/10 bg-white/[.03] px-4 py-3.5 outline-none placeholder:text-white/20  text-white" />
            <input type="email" placeholder="Email address" value={data.email} onChange={(e) => setData('email', e.target.value)} className="rounded-xl border border-white/10 bg-white/[.03] px-4 py-3.5 outline-none placeholder:text-white/20  text-white" />
            <input placeholder="Installation address" value={data.address} onChange={(e) => setData('address', e.target.value)} className="rounded-xl border border-white/10 bg-white/[.03] px-4 py-3.5 outline-none placeholder:text-white/20  text-white" />
            <textarea placeholder="Notes / photo details (optional)" rows={3} value={data.notes} onChange={(e) => setData('notes', e.target.value)} className="rounded-xl border border-white/10 bg-white/[.03] px-4 py-3.5 outline-none placeholder:text-white/20  text-white" />
            {/* <div className="rounded-xl border border-dashed border-white/15 p-4 text-center text-sm text-white/35">
              <DoorOpen className="mx-auto mb-2 h-5 w-5" />Photo upload placeholder
            </div> */}
          </div>
                 <button onClick={()=>{alert("Thanks")}} className="mt-2 w-full bg-[#FFBD00] text-black cursor-pointer rounded-xl border border-white/10 py-3">Done</button>

        </motion.div>
        </motion.div>
        
    </>
  )
}

export default BookingForm