import React from 'react'
import dark from '../../images/image-about-dark.jpg';
import light from '../../images/image-about-light.jpg'

const About = () => {
  return (
    <div>
        <section>
            <div>
                <img src={dark} alt="" />
            </div>
            
            <div>
                <h1>ABOUT OUR FURNITURE</h1>
                <p>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a 
                    cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from 
                    traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.
                </p>
            </div>

            <div>
                <img src={light} alt="" />
            </div>
        </section>
    </div>
  )
}

export default About