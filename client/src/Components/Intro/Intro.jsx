import React from 'react';
import angleLeft from '../../images/icon-angle-left.svg'
import angleRight from '../../images/icon-angle-right.svg'
import image1 from '../../images/mobile-image-hero-1.jpg';
import image2 from '../../images/mobile-image-hero-2.jpg';
import image3 from '../../images/mobile-image-hero-3.jpg';
import Navbar from '../Navbar/Navbar'

import imageOne from '../../images/desktop-image-hero-1.jpg';
import imageTwo from '../../images/desktop-image-hero-2.jpg';
import imageThree from '../../images/desktop-image-hero-3.jpg';

import arrow from './../../images/icon-arrow.svg'

const Data = [
  {
    id: 1,
    title: 'Discover innovative ways to decorate',
    desc: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    mobile: image1,
    desktop: imageOne
  },

  {
    id: 2,
    title: 'We are available all across the globe',
    desc: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    mobile: image2,
    desktop: imageTwo
  },

  {
    id: 3,
    title: 'Manufactured with the best materials',
    desc: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    mobile: image3,
    desktop: imageThree
  },
]

const Intro = () => {
  return (
    <div className=''>
      
        
        <section >
          {
            Data.map(item => (
              <div key={item.id} className='grid grid-cols-1 lg:grid-cols-2 lg:items-center'>
                 <div className='relative'>
                   <picture className=''>
                    <source media='(min-width: 768px)'  srcSet={item.desktop} className=''/>
                    <img src={item.mobile} alt="" className='w-full' />
                   </picture>

                   <div className=''>
                       <ul className='absolute right-0 bottom-0 flex'>
                         <li><button className='bg-black p-6 hover:bg-gray-800 transition-all duration-200'><img src={angleLeft} alt="" className='' /></button></li>
                         <li><button className='bg-black p-6 hover:bg-gray-800 transition-all duration-200'><img src={angleRight} alt="" /></button></li>
                       </ul>
                    </div>
                 </div>

                <div className='p-8 lg:p-12  text-left '>
                  <h1 className='text-4xl lg:text-5xl font-bold'>{item.title}</h1>
                  <p className='text-xl lg:text-2xl text-gray-500 my-6'>{item.desc}</p>
                  <div>
                        <button className='flex items-center text-xl  font-semibold gap-6 text-black-900 tracking-widest hover:opacity-60'>
                            SHOP NOW
                          <img src={arrow} alt="" />
                        </button>
                  </div>
                </div>
               
               
              </div>
            ))
          }
          
        </section>
    </div>
  )
}

export default Intro