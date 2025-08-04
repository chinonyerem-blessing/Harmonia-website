import React, { useRef, useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from "./component/nav"
import Number from "./component/number";
import Service from "./component/services";
import Testimonial from './component/testimonials';
import Footer from "./component/footer"
import { GiHamburgerMenu } from "react-icons/gi";
import { HiMiniXMark } from "react-icons/hi2";
import AOS from "aos";
import 'aos/dist/aos.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const serviceRef = useRef(null);
  const testimonialRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }
useEffect(() => {
  AOS.init({
    duration:1000,
    once: true
  });
}, []);

  return (

    <div>
      <div className="navBar">
        <div className="navIcon">
          <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200"><i>Harmonio</i></p>
          <button data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiMiniXMark /> : <GiHamburgerMenu />}
          </button>

        </div>

        <div className={`navBtn ${menuOpen ? 'active' : ''}`}>
          <button data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" onClick={() => scrollToSection(homeRef)}>Home</button>
          <button data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" onClick={() => scrollToSection(aboutRef)}>About Us</button>
          <button data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" onClick={() => scrollToSection(serviceRef)}>Service</button>
          <button data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" onClick={() => scrollToSection(testimonialRef)}>Testimonials</button>
          <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="navBtn2" >
            <button onClick={() => scrollToSection(contactRef)}>Contact Us</button>
          </div>
        </div>


      </div>


      <div ref={homeRef} className="home-section"><Nav /></div>
      <div ref={aboutRef} className="about-section"><Number /></div>
      <div ref={serviceRef} className="service-section"><Service /></div>
      <div ref={testimonialRef} className="testimonial-section"><Testimonial /></div>
      <div ref={contactRef} className="contact-section"><Footer /></div>

    </div>
  )
}

export default App;
