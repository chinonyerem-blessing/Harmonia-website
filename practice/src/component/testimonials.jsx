 import React, { useState } from "react";
import { FaCircle } from "react-icons/fa";
import testimonials from "../jsComponents/testimonial.js";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
  }

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  }

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1 + testimonials.length) % testimonials.length);
  }

  return (
    <div>
      <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="service1"><span><FaCircle /></span>Testimonials</p>
      <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="service2">Real Stories, Real Healing:<br />Heal from Our Clients</p>
      <div style={{ paddingTop: "60px" }}>
        <div className="testBox" style={{ position: "relative", paddingTop: "40px", objectFit: "cover" }}>
          {testimonials.map((testimonial, index, positionClass) => (
            <img data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className={`image ${testimonial.positionClass}`}
              key={index}
              src={testimonial.image}
              onClick={() => handleImageClick(index)}
              style={{
                border: index === currentIndex ? "3px solid rgb(53, 187, 53)" : "none",
                cursor: "pointer",
              }}
            />
          ))}
          <div>
            <div className="testimonial-info" style={{ position: "absolute", left: '50%', transform: "translateX(-50%)",textAlign: "center" }}>
              <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="testimonial-info2" style={{ fontWeight: "bold", fontFamily: "Arial, sans-serif", fontSize: "20px", paddingBottom: "10px" }}>{testimonials[currentIndex].name}</p>
              <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="testimonial-info3" style={{ whiteSpace: "pre-line", lineHeight: "25px", fontFamily: "Arial, sans-serif" }}>{testimonials[currentIndex].testimonial}</p>
            </div>
            <div className="testimonial-controls" style={{ position: "absolute", gap: "20px", left: '50%', transform: "translateX(-50%)", display: "flex", justifyContent: "center", width: "200px" }}>
              <button data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" onClick={handlePrevClick}><FaArrowLeft /></button>
              <button data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" onClick={handleNextClick}><FaArrowRight /></button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )

}
export default Testimonial;