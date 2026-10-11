import React from 'react'

const VisionCard = (props) => {
  return (
   <>
   <div className='w-100 py-4 px-4 bg-[#FFBD00] rounded-md shadow-lg shadow-[#ccc] cursor-pointer '>
    <p className='text-black text-xl font-sans'>{props.text}</p>
   </div>
   </>
  )
}

export default VisionCard