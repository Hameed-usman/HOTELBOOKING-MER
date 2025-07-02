import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, facilityIcons, roomCommonData, roomsDummyData } from '../assets/assets'

const RoomDetails = () => {
    const {id} = useParams()
    const [room, setRoom] = useState(null)
   const [mainImage, setMainImage] =  useState(null)

    useEffect (() => {
       const room = roomsDummyData.find(room => room._id === id)
       room && setRoom(room)
       setMainImage(room.images[0])
    },[])
  return room && (
    <div className='py-28 md:py-35 px-4  md:px-16 lg:px-24 xl:px-32' >
        {/* room detaol  */}
        <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
      <h1 className='font-playfair text-3xl  md:text-4xl'>{room.hotel.name} <span className='font-inter text-sm'>({room.roomType})</span> </h1>
      <p className='py-1.5 px-3 rounded-full text-xs font-inter text-white bg-orange-400'>20%</p>
      </div>
      <div className='mt-2 '>
        <p className='ml-2'> 200+ reviews</p>
      </div>
      <div className='flex items-center gap-1 mt-2'>
        <img src={assets.locationIcon} alt="" />     <span>{room.hotel.address}</span>
      </div>

      {/* ROOM IMAGES  */}
      <div className='flex flex-col lg:flex-row mt-6 gap-6'>
        <div className='lg:w-1/2 w-full'>
            <img src={mainImage} alt="room-img" className='w-full rounded-xl shadow-lg object-cover' />
        </div>
        <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
        {room?.images.length > 1 && room.images.map((image, index) => (
                <img onClick={() => setMainImage(image)} src={image} alt="" key={index} className={`w-full rounded-xl shadow-md cursor-pointer 
                    ${mainImage === image && 'outline-2 outline-orange-50'}`}/>
            ))}
        </div>
      </div>

      {/* HOTEL AMENITIES  */}
      <div className='flex flex-col md:flex-row md:justify-between mt-10'>
        <div className='flex flex-col'>
          <h1>
            Experience Luxury Like Never Before
          </h1>
          <div className='flex flex-wrap mt-3 mb-6 gap-4 items-center'>
            {room.amenities.map((item, index) => (
              <div className='flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100'>
               <img className='h-5 w-5' src={facilityIcons[item]} alt={item}/>
               <p>{item}</p>
               </div>
            ))}
          </div>
        </div>
        <p className='text-2xl font-medium'> ${room.pricePerNight}/night</p>
      </div>

      {/* CHECK IN DATES  */}
      <form className='flex flex-col md:flex-row items-center md:items-center justify-between p-6 mx-auto mt-16  max-w-6xl'>
      <div className='flex flex-col flex-wrap md:flex-row items-start justify-between gap-4 md:gap-10'>
      <div className='flex flex-col'>
              <label htmlFor="checkInDate" className='font-medium'>Check In</label>
            <input type="date" id="checkInDate" placeholder='checkInDate' name="" className='w-full rounded-border
            px-3 py-2 mt-1.5 outline-none' required />
          </div>

          <div className='flex flex-col'>
              <label htmlFor="checkOutDate" className='font-medium'>Check Out</label>
            <input type="date" id="checkOutDate" placeholder='checkOutnDate' name="" className='w-full rounded-border
            px-3 py-2 mt-1.5 outline-none'required />
          </div>

          <div className='flex flex-col'>
              <label htmlFor="guests" className='font-medium'>Guests</label>
            <input type="number" id="guests" name="" className='max-w-20 rounded border px-3 py-2 mt-1.5 outline-none ' required />
          </div>
        </div>
        <button type="submit" class="bg-blue-600 cursor-pointer text-white py-2 px-6 rounded-md text-lg hover:bg-blue-700 transition">
Check Availiability</button>
      </form>

      {/* ROOM SPECFIICTIONS  */}
      <div className='mt-24 space-y-4'>
        {
          roomCommonData.map((spec, index) => (
              <div className='flex items-start gap-2'>
                <img src={spec.icon} key={index} className='w-6.5' alt={`${spec.title}`} />
                  <div>
                    <p>{spec.title}</p>
                    <p>{spec.description}</p>
                  </div>
              </div>
          ))
        }
      </div>

      <div className='max-3xl border-y border-gray-300 my-25 text-gray-500 py-10'>
        <p> Guests will be allocated on the ground floor according to availability. You get a comfortable Two bedroom apartment has a true city feeling. The price quoted is for two guest, at the guest slot please mark the number of guests to get the exact price for groups. The Guests will be allocated ground floor according to availability. You get the comfortable two bedroom apartment that has a true city feeling.</p>
      </div>
    </div>
  )
}

export default RoomDetails
