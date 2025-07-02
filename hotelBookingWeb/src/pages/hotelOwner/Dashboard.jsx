import React, { useState } from 'react'
import Title from '../../components/Title'
import { assets, dashboardDummyData, userBookingsDummyData } from '../../assets/assets'

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(dashboardDummyData)
  return (
    <div>
      <Title align='left' font='outfit' title='Dashboard' subTitle='Monitor your room listing, track bookins and analyze revenue-all in one place.
      Stay updated with real-time insights to ensure smooth operations'/>

      <div className='flex gap-4 my-8'>
        {/* TOTAL BOOKING  */}  
        <div className='bg-primary/3 border border-primary/10 rounded flex p-4 pr-8'>
          <img className='max-sm:hidden h-10' src={assets.totalBookingIcon} alt="total-bookingIcon"  />
          <div className='flex flex-col sm:ml-3 font-medium'>
            <p className='text-blue-500 text-lg'>Total Bookings</p>
            <p className='text-neutral-400 text-base'>{dashboardData.totalBookings}</p>
          </div>
        </div>

        {/* TOTAL REVENUE  */}
        <div className='bg-primary/3 border border-primary/10 rounded flex p-4 pr-8'>
          <img className='max-sm:hidden h-10' src={assets.totalBookingIcon} alt="total-bookingIcon"  />
          <div className='flex flex-col sm:ml-3 font-medium'>
            <p className='text-blue-500 text-lg'>Total Bookings</p>
            <p className='text-neutral-400 text-base'>{dashboardData.totalBookings}</p>
          </div>
        </div>
   </div>

   {/* RECENT BOOKINGS  */}
   <h2 className='mb-5 text-xl text-blue-950/70 font-medium'>Recent Bookings</h2>
      <div className='w-full max-w-3xl text-lef borer border-gray-300  rounded-lg max-h-80 overflow-y-scroll'>
          <table className='w-full'>
        <thead className='bg-gray-50'>
          <tr>
            <th className='py-3 px-4 text-gray-800 font-medium'>User Name</th>
            <th className='py-3 px-4 text-gray-800 font-medium max-sm:hidden'>Room Name</th>
            <th className='py-3 px-4 text-gray-800 font-medium'>Total Amount</th>            
            <th className='py-3 px-4 text-gray-800 font-medium'>Payment Status</th>
        </tr>
        </thead>

        <tbody>
          {dashboardData.bookings.map((item, index) => (
            <tr key={index}>
              <td className='px-3 py-4 text-gray-700 border-t border-gray-300 max-sm:hidden'>{item.user.username}</td> 
              <td className='px-3 py-4 text-gray-700 border-t border-gray-300 max-sm:hidden'>{item.room.roomType}</td> 
              <td className='px-3 py-4 text-gray-700 border-t border-gray-300 max-sm:hidden'>$ {item.totalPrice}</td>

              <td className='px-3 py-4 text-gray-700 border-t border-gray-300 max-sm:hidden'>
                     <button className={`py-1 px-3 text-xs rounded-full mx-auto ${item.isPaid ? 'bg-green-200 text-green-600' : 'bg-amber-200 text-amber-500'}`} > {item.isPaid ? 'Completed' : 'Pending'}</button>
              </td>
              
              </tr>
          ))}
        </tbody>
      </table>
   </div>
    </div>
  )
}

export default Dashboard
