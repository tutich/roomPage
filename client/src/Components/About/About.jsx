import React from 'react'
import dark from '../../images/image-about-dark.jpg';
import light from '../../images/image-about-light.jpg'

const About = () => {
  return (
    <div>
        <section className='grid grid-cols-1 lg:grid-cols-3 '>
            <div >
                <img src={dark} alt=""  className='w-full '/>
            </div>
            
            <div className='items-center max-w-md w-[90%] mx-auto text-left lg:p-9'>
                <h3 className='tracking-widest leading-relaxed lg:text-3xl lg:mt-6  font-bold text-black-900'>ABOUT OUR FURNITURE</h3>
                <p className='lg:text-xl text-gray-500 leading-relaxed lg:mt-6 '>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a 
                    cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from 
                    traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.
                </p>
            </div>

            <div>
                <img src={light} alt="" className='w-full '/>
            </div>
        </section>
    </div>
  )
}

export default About