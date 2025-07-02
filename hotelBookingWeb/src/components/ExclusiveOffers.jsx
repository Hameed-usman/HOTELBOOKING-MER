import React from 'react'
import Title from './Title'
import { assets, exclusiveOffers } from '../assets/assets'

const ExclusiveOffers = () => {
    return (
      <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30'>
        <div className='font-playfair flex flex-col md:flex-row items-center justify-between w-full'>
          <Title className='font-playfair' align='left' title="Exclusive Offers"
            subTitle='Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.' />
          <button className='flex items-center group'>
            View All Offers 
            <img className='px-3 transition-all group-hover:translate-x-1 cursor-pointer' src={assets.arrowIcon} alt="arrowIcon" />
          </button>
        </div>
  
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full'>
          {exclusiveOffers.map((item) => (
            <div 
              key={item._id}
              className='group relative flex flex-col justify-between w-full h-[300px] p-6 rounded-2xl text-white bg-no-repeat bg-cover bg-center overflow-hidden'
              style={{ backgroundImage: `url(${item.image})` }}
            >
              {/* Discount Badge */}
              <div className="bg-white text-black px-5 py-1 rounded-full text-sm shadow-lg w-fit">
  {item.priceOff}% OFF
</div>

  
              {/* Text Content */}
              <div className='flex flex-col gap-1'>
                <h2 className='text-lg font-semibold'>{item.title}</h2>
                <p className='text-sm'>{item.description}</p>
                <p className='text-xs mt-2'>{item.expiry}</p>
  
                {/* View Offers Button */}
                <button className='flex items-center mt-2 font-bold'>
                  View Offers
                  <span className="ml-2 group-hover:translate-x-1 transition-all">
                    →
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  

export default ExclusiveOffers
