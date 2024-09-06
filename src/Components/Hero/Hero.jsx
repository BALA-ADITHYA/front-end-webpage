import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container' >
      <div className="hero-text">
        <h1 >WE Ensure better Education for a Better World </h1>
        <p>Our cutting-edge curriculam is designed to enpower students with the knowledge, skills and experiences</p>
      </div>
      <button className="btn">Explore more <img src={dark_arrow} alt="" /></button>
    </div>
  )
}

export default Hero
