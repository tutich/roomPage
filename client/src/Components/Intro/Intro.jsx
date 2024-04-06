import React from 'react'
import Navbar from '../Navbar/Navbar'
import angleLeft from '../../images/icon-angle-left.svg'
import angleRight from '../../images/icon-angle-right.svg'
import image1 from '../../images/mobile-image-hero-1.jpg';
import image2 from '../../images/mobile-image-hero-2.jpg';
import image3 from '../../images/mobile-image-hero-3.jpg';

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
        <Navbar />
        
        <section >
          {
            Data.map(item => (
              <div key={item.id} className='flex flex-col lg:flex-row'>
                 <div>
                   <picture>
                    <source media='(min-width: 768px)'  srcSet={item.desktop}/>
                    <img src={item.mobile} alt="" className='w-full' />
                   </picture>

                   <section className=''>
                       <img src={angleLeft} alt="" className='' />
                       <img src={angleRight} alt="" />
                    </section>
                 </div>

                <div className='p-8 lg:p-12 w-[20%]'>
                  <h1 className='text-2xl lg:text-5xl font-bold'>{item.title}</h1>
                  <p className='text-xl lg:text-2xl text-gray-500 my-6'>{item.desc}</p>
                  <div>
                        <button className='flex items-center justify-between font-semibold gap-6 text-black-900'>
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