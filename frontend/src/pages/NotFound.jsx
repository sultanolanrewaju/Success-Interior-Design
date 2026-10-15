import React from 'react'

const NotFound = () => {
  return (
    <div className='flex h-screen w-full items-center justify-between overflow-hidden bg-white'>
      {/* Left Text Content */}
      <div className='flex flex-col justify-center p-12 max-w-xl'>
        <h1 className='text-[150px] font-bold leading-none text-red-500'>404</h1>
        <span className='font-sans text-3xl font-semibold mt-2'>Not Found</span>
        <p className='font-bold font-sans text-black/60 mt-4'>
          It seems you have entered a wrong web address. Input the correct link and try again!
        </p>
      </div>

      {/* Right Image Container */}
      <div className='relative h-full w-1/2 overflow-hidden'>
        <img 
          src="/lost.jpeg" 
          alt="404 Not Found" 
          className='h-full w-full object-cover' 
        />
      </div>
    </div>
  )
}

export default NotFound