import React,{useState} from 'react'
import { X,DoorOpen } from 'lucide-react'
import { motion } from 'framer-motion'
import axios from "axios"
import toast from 'react-hot-toast'
// http://localhost:8080/api/bookings


const BookingForm = ({blind,onClose}) => {

    const [data,setData]=useState({
        // blind:"",
        name:"",
        phone:"",
        email:"",
        address:"",
        description:""
    })
    const [loading,setLoading] = useState(false)

    const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        service: blind || "General Booking",
        name: data.name,
        phone: data.phone,
        email: data.email,
        address: data.address,
        description: data.notes
      };

      const response = await axios.post("http://localhost:8080/api/bookings", payload);

      if (response.status === 200) {
        toast.success("Booking submitted successfully! Owner has been notified.");
        onClose(); // Close the modal
      }
    } catch (error) {
      console.error("Booking error:", error);
      toast.error("Failed to submit booking. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      className="fixed inset-0 z-[90] grid place-items-center bg-black/60 p-4 backdrop-blur-md"
    >
      <motion.div 
        initial={{ y: 30, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        className="max-h-[92vh] w-full max-w-xl overflow-auto rounded-[2rem] border border-white/10 bg-gray-900 p-6 shadow-2xl md:p-8"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-bold tracking-[.2em] text-[#ffffff]">BOOK A VISIT</p>
            <h2 className="mt-2 font-display text-3xl text-white">You're on the list.</h2>
          </div>
          <button onClick={onClose} className="rounded-full p-2 bg-[#FFBD00] cursor-pointer">
            <X />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
          <input 
            placeholder="Blind" 
            value={blind} 
            readOnly 
            className="rounded-xl border border-white/10 bg-white/[.03] px-4 py-3.5 outline-none placeholder:text-white/20 text-white cursor-not-allowed" 
          />
          <input 
            placeholder="Full name" 
            value={data.name} 
            onChange={(e) => setData({ ...data, name: e.target.value })} 
            className="rounded-xl border border-white/10 bg-white/[.03] px-4 py-3.5 outline-none placeholder:text-white/20 text-white" 
            required
          />
          <input 
            placeholder="Phone number" 
            value={data.phone} 
            onChange={(e) => setData({ ...data, phone: e.target.value })} 
            className="rounded-xl border border-white/10 bg-white/[.03] px-4 py-3.5 outline-none placeholder:text-white/20 text-white" 
          />
          <input 
            type="email" 
            placeholder="Email address" 
            value={data.email} 
            onChange={(e) => setData({ ...data, email: e.target.value })} 
            className="rounded-xl border border-white/10 bg-white/[.03] px-4 py-3.5 outline-none placeholder:text-white/20 text-white" 
            required
          />
          <input 
            placeholder="Installation address" 
            value={data.address} 
            onChange={(e) => setData({ ...data, address: e.target.value })} 
            className="rounded-xl border border-white/10 bg-white/[.03] px-4 py-3.5 px-4 py-3.5 outline-none placeholder:text-white/20 text-white" 
            required
          />
          <textarea 
            placeholder="Notes / photo details (optional)" 
            rows={3} 
            value={data.notes} 
            onChange={(e) => setData({ ...data, notes: e.target.value })} 
            className="rounded-xl border border-white/10 bg-white/[.03] px-4 py-3.5 outline-none placeholder:text-white/20 text-white" 
          />
          
          <button 
            type="submit" 
            disabled={loading}
            className="mt-2 w-full bg-[#FFBD00] text-black font-semibold cursor-pointer rounded-xl border border-white/10 py-3 disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Done"}
          </button>
        </form>

      </motion.div>
    </motion.div>
        
    </>
  )
}

export default BookingForm