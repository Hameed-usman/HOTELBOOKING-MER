import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Title from './Title'
import { Navigate, useNavigate } from 'react-router-dom'

const FeaturedDestination = () => {
    const Navigate = useNavigate()
  return (
    <div className='font-playfair flex flex-col mt-15 items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-'>
        <Title className='font-playfair ' title='Featured Destination' subTitle='Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences.'/>
    <div className='flex flex-wrap justify-center items-center gap-6 mt-20'>
      {roomsDummyData.slice(0,4).map((room, index) => (
         <HotelCard key={room._id} room={room} index={index}/>
      ))}
    </div>
    <button onClick={() => {Navigate('/rooms'); scrollTo(0,0)}} className='my-16 px-4 py-2 text-sm fotn-medium bg-white
    border-gray-500 rounded hover:gray-50 transition-all cursor-pointer'>
        View All Destination
    </button>
    </div>
  )
}

export default FeaturedDestination
