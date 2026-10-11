import React, { useState } from 'react'
import { SmoothCaret } from './SmoothCaret'

const ContactFrom = () => {
const [name,setName] = useState("")
return (
<>
<section>
  <div className='grid grid-cols-1 justify-center md:grid-cols-2 lg:ml-20  sm:gap-8 max-w-7xl mx-auto px-4 sm:px-6">'>
    <div className='mt-5'>
      <h1 className='text-6xl font-bold pt-2'>Send Us a Message</h1>
      <p className='pt-5 text-xl'>Send us a message to let us know what we can offer you anyday. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa autem necessitatibus enim laboriosam omnis temporibus alias fuga eaque delectus pariatur, commodi mollitia voluptatibus, voluptate atque obcaecati in sed, eligendi dignissimos?</p>
    </div>
    <div >
      <form action="" className='flex flex-col  lg:mt-3 '>
        <div className='flex lg:flex-row gap-1 mb-2 sm:flex-col '>
  <input type="text" className='border border-gray-400 rounded-md px-5 py-1.5  outline-none focus placeholder:text-gray' placeholder='Input your Name..' /><br />
        <input type="email" className='border border-gray-400 rounded-md px-5 py-1.5  outline-none focus placeholder:text-gray' placeholder='Input your Email..' /><br />
        </div>
         
        <input type="subject" className="border border-gray-400 rounded-md px-5 py-1.5 w-117 outline-none focus placeholder:text-gray"  placeholder='Input your Subject..'/><br />
        <textarea name="content" className='border border-gray-400 w-117  rounded-md px-5 py-1.5 w-100 h-70 outline-none focus placeholder:text-gray' id="" placeholder='Your Message..'></textarea><br />
      </form>
    </div>
  </div>
</section>
</>
)
}

export default ContactFrom