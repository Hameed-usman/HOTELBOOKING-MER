import React, { useState } from 'react'
import Title from '../../components/Title'
import { assets } from '../../assets/assets';

const AddRoom = () => {
  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null
  });

  const [input, setInputs] = useState({
    roomType: '',
    pricePerNight: 0,
    amenities: {
      'Free Wifi': false,
      'Breakfast': false,
      'Swimming Pool': false,
      'Mountain View': false,
      'Pool Access': false,
    }
  });

  return (
    <form>
      <Title  font='outfit'  align='left'title='Add Rooms'subTitle='Fill in the details carefully and accurately in the detail, pricing, and amenities to enhance the user booking experience.'/>
    
    {/* {add rom images}  */}

      <p className='mt-10 text-gray-800'>Images</p>
    <div className='grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap'>
      {Object.keys(images).map((key) => (
        <label htmlFor={`roomImages${key}`} key={key}>
         <img className='max-h-13 cursor-pointer opacity-80' src={images[key] instanceof File  ? URL.createObjectURL(images[key]) : assets.uploadArea} alt="" />
         <input type="file" accept='image/*' onChange={e=> setImages({...images, [key]: e.target.files[0]})} id={`roomImages${key}`} />

        </label>
        
      ))}
    </div>
  
      <div className='w-full flex max-sm:flex-col sm:gap-4 mt-4'>
        <div className='flex-1 m  max-w-48'>
          <p>Room Type</p>
          <select value={setInputs.roomType} onChange={e=> setInputs({...inputs, roomType:e.target.value})} className='border opacity-70 border-gray-300 mt-1 rounded p-2 w-full'>
            <option value="Select Room Ttpe">Selec Room Type</option>
            <option value="Single Room">Single Bed</option>
            <option value="Doule Room">Double Bed</option>
            <option value="Luxury Room">Luxury ROom</option>
            <option value="Family Suite">Family Suite</option>
          </select>
        </div>
        <div>
          <p>Price <span>/night</span></p>
          <input type="number" placeholder='0' className='mt-1 w-24 p-2 border border-gray-300 rounded' value={input.pricePerNight} onChange={e=> setInputs({...inputs, pricePerNight: e.target.value})} />
        </div>  
        <p className='text-gray-800'>Aminities</p>
        <div className="flex flex-col flex-wrap mt-1- text-gray-400 max-w-sm">
  {Object.keys(input.amenities).map((amenity, index) => (
    <div key={index} className=" items-center space-x-2">
      <input
        type="checkbox"
        id={`amenity${index + 1}`}
        checked={input.amenities[amenity]}
        onChange={() =>
          setInputs({
            ...input,
            amenities: {
              ...input.amenities,
              [amenity]: !input.amenities[amenity],
            },
          })
        }
        className="accent-blue-500 w-4 h-4"
      />
      <label htmlFor={`amenity${index + 1}`} className="text-gray-700 text-sm capitalize">
        {amenity}
      </label>
    </div>
  ))}
</div>

      </div>
  
  
    </form>
  )
}

export default AddRoom;
