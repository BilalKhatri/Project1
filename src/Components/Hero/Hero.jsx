
import React from 'react'
import './Hero.css' 
import dark_arrow from  '../../Assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
        <h1>We Ensure Education For a Better World</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
    <button className='btn'>Explore More <img src={dark_arrow} alt='' /></button>
    </div>
    </div>
  )
}

export default Hero
