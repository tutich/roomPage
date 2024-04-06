import React from 'react'
import dark from '../../images/image-about-dark.jpg';
import light from '../../images/image-about-light.jpg'

const About = () => {
  return (
    <div>
        <section className='flex flex-col lg:flex-row '>
            <div >
                <img src={dark} alt=""  className='w-full '/>
            </div>
            
            <div className='max-w-md w-[90%] mx-auto text-left '>
                <h3 className='tracking-widest leading-relaxed text-xl font-bold text-black-900'>ABOUT OUR FURNITURE</h3>
                <p className='text-[##A1A1A1] leading-relaxed mx-auto'>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a 
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