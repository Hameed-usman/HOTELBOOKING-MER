import React, { useState } from 'react'
import Title from '../../components/Title'
import { roomsDummyData } from '../../assets/assets'

const ListRoom = () => {
  const [rooms, setRooms] = useState(roomsDummyData)
  return (
    <div>
      <Title align='left' title='Room listing' subTitle='View, Edit or manage all listed rooms. Keep information up-to-dat eto provide the best experience for user' />

    <p>All Rooms</p>     
    <div className='w-full max-w-3xl text-lef borer border-gray-300  rounded-lg max-h-80 overflow-y-scroll mt-8'>
      <table className='className='w-full>
      <thead className='bg-gray-50'>
          <tr>
            <th className='py-3 px-4 text-gray-800 font-medium'>Name</th>
            <th className='py-3 px-4 text-gray-800 font-medium max-sm:hidden'>Facility</th>
            <th className='py-3 px-4 text-gray-800 font-medium'>Price /Night</th>            
            <th className='py-3 px-4 text-gray-800 font-medium'> Action</th>
        </tr>
        </thead>
        <tbody>
          {rooms.map((item, index) => (
            <tr key={index}>
              <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>{item.roomType}</td>
              <td className='py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden'>{item.amenities.join(',')}</td>
              <td className='py-3 px-4 text-gray-700 border-t border-gray-300 '>{item.pricePerNight}</td>
              <td class="px-6 py-4">
  <label class="relative inline-flex items-center cursor-pointer">
    <input type="checkbox" value="" class="sr-only peer" />
    <div class="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-600 peer-focus:ring-4 peer-focus:ring-blue-300 transition-all duration-300"></div>
    <div class="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-all duration-300 peer-checked:translate-x-5"></div>
  </label>
</td>

            </tr>
          ))}
        </tbody>
      </table>
</div> 
    </div>
  )
}

export default ListRoom
