import React from 'react'
import NavBar from './Components/NavBar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonial from './Components/Testimonial/Testimonial'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'




const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <div className="container">
      <Title subTitle='our program' 
        title='What We Offer'
      />
      <Programs />
      <About />
      <Title subTitle='Gallery' 
        title='Campus Photos'
      />
      <Campus />
      <Title subTitle='TESTIMONIALS' 
        title='What Student Says'
      />
      <Testimonial />
      <Title subTitle='Contact Us' 
        title='Get in Touch'
      />
      <Contact />
      <Footer />
      </div>
    </div>
  )
}

export default App
