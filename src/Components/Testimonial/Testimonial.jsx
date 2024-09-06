import React, { useRef } from 'react'
import './testimonial.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonial = () => {

    const slid = useRef();
    let tx = 0;
    const slideForward = ()=>{
       if(tx > -50) {
        tx -= 25;
       }
       slid.current.style.transform =`translateX(${tx}%)`;


    }
    const slideBackward = ()=>{
        if(tx < 0) {
            tx += 25;
           }
           slid.current.style.transform =`translateX(${tx}%)`;
    
        
    }

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onclick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onclick={slideBackward}/>
      <div className="slider">
        <ul ref={slid}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Willam Jackson</h3>
                            <span>USA</span>
                        </div>
                    </div>
                        <p>Choosing to Pursue my Degree in This University Was one of the Best decisions I have Ever made </p>
                    
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Willam Jackson</h3>
                            <span>USA</span>
                        </div>
                        </div>
                        <p>Choosing to Pursue my Degree in This University Was one of the Best decisions I have Ever made </p>
                   
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Willam Jackson</h3>
                            <span>USA</span>
                        </div>
                        </div>
                        <p>Choosing to Pursue my Degree in This University Was one of the Best decisions I have Ever made </p>
                   
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Willam Jackson</h3>
                            <span>USA</span>
                        </div>
                        </div>
                        <p>Choosing to Pursue my Degree in This University Was one of the Best decisions I have Ever made </p>
                    
                </div>
            </li>
            
        
            
          
        </ul>
      </div>
    </div>
  )
}

export default Testimonial
