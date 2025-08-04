import React, { useState } from "react";
import img1 from "../images/mal1.jpg";
import img2 from "../images/coffeeimg4.jpeg";
import img3 from "../images/mal2.jpg";
import img4 from "../images/mal3.jpg";
import img5 from "../images/mal4.jpg";
import Number from "./number";
import Services from "./services";
import testimonials from "./testimonials";
import Footer from "./footer";



function Nav() {

   
    return (
        <section>
            

            <div className="navv">
                <div className="navBody">
                    <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="find">Find Inner Peace With<br /> <span><i>Harmonio Therapy</i></span></p>
                    <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="find2">Get expert therapy and support tailored to<br />your needs-anytime, anywhere</p>
                    <button data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">Start Your Healing Journey</button>
                </div>
                <div>
                    <div className="imgs">
                        <img data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="img1" src={img1} />
                        <img data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="img2" src={img2} />
                        <img data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="img3" src={img3} />
                        <img data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="img4" src={img4} />
                        <img data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="img5" src={img5} />
                        <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="appoint">5000+ Appointments <br /><span>Patients booked already</span></p>
                    </div>
                </div>
            </div>

        </section>

    )
}

export default Nav;