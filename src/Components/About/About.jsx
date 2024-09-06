import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
    <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' />
    </div>
    <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nuturing Tomorrow's Leaders Today</h2>
        <p>Emark on transformative educational journey with our university's comprehensive education programs.our cutting-edge curricullam is designed to empower students  with knowledge, skills,and experiences needed to excel in the dynamic field of education</p>
        <p>Emark on transformative educational journey with our university's comprehensive education programs.our cutting-edge curricullam is designed to empower students  with skills,and experiences needed to excel in the dynamic field of education</p>
        <p>Emark on transformative educational journey with our university's comprehensive education programs.our cutting-edge curricullam is designed to empower students  with knowledge, skills,and experiences needed to excel</p>
       
    </div>
      
    </div>
  )
}

export default About
