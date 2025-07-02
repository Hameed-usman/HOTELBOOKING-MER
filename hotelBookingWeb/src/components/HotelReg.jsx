import React from 'react'
import { assets, cities } from '../assets/assets'

const HotelReg = () => {
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 z-100 flex items-center justify-center bg-black/70'>
      <form className='flex bg-white rounded-xl max-w-4xl max-md:mx-2' >
        <img src={assets.regImage}  alt="registration-Img" className='w-1/2 rounded-xl hidden md:block' />

        <div className='relative flex flex-col  items-center md:w-1/2 p-8 md:p-10'>
            <img src={assets.closeIcon} alt="close_icon" className='absolute top-4 right-4 h-4 w-4 cursor-pointer' />
            <p className='mt-6 text-2xl font-semibold'>Register Your Hotel</p>

             {/* HOTEL NAME  */}
        <div className='mt-4 w-full'>
             <label htmlFor="Name" className='font-medium text-gray'>Hotel Name</label>
             <input id='name' className='border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light required' type="text" placeholder='Your Hotel Name' />
        </div>

        {/* PHONE NAME  */}
        <div className='mt-4 w-full'>
             <label htmlFor="Name" className='font-medium text-gray'>Phone</label>
             <input id='contact' className='border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light required' type="Number" placeholder='Your Hotel Name' />
        </div>

        {/* HOAddressTEL NAME  */}
        <div className='mt-4 w-full'>
             <label htmlFor="Name" className='font-medium text-gray'>Address</label>
             <input className='border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light required' type="text" placeholder='Your Hotel Name' />
        </div>

        {/* CITY NAME  */}
        <div className='mt-4 w-full'>
             <label htmlFor="City" className='font-medium text-gray'>Hotel Name</label>
             <select id="city" className='border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light required'>
                <option value="">Select City</option>
                {cities.map((city)  => (
                    <option value={city} key={city}>{city}</option>
                ))}
             </select>
        </div>
        <button className='bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-300'>Register</button>
        </div>
         
        
      </form>
    </div>
  )
}

export default HotelReg
