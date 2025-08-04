import React, { useRef } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";



function Footer() {
    return (
        <section>
            <div className="navi9">
                <div className="footer1">
                    <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="footer-text">Let's Connect there</p>
                    <button data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="footer-button">Hire Me</button>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <hr data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="line1" />
                </div>

                <div className="navi7">
                    <div>
                        <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="icon2"><i>Harmonia</i></p>
                        <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="aim">Our aim is to provide quality therapy services to our <br />clients. Making a positive impact on their lives is our<br /> top priority.</p>
                        <div className="footerBtn">
                            <button data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200"><FaFacebookSquare /></button>
                            <button data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200"><FaYoutube /></button>
                            <button data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200"><FaWhatsapp /></button>
                            <button data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200"><FaSquareInstagram /></button>
                            <button data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200"><FaTwitter /></button>
                        </div>
                    </div>
                    <div className="navi6">
                        <div className="navi">
                            <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">Navigation</p>
                            <button data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" onClick={() => scrollToSection(homeRef)}>Home</button><br />
                            <button data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" onClick={() => scrollToSection(aboutRef)}>About Us</button><br />
                            <button data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" onClick={() => scrollToSection(serviceRef)}>Service</button><br />
                            <button data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" onClick={() => scrollToSection(resourceRef)}>Resources</button><br />
                            <button data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" onClick={() => scrollToSection(contactRef)}>Contact Us</button>
                        </div>
                        <div>
                            <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="navi1">Contact</p>
                            <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="navi2">+234 812 3456 789</p>
                            <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="navi2">Harmonia@gmail.com</p>
                            <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="navi2">portofio-harmonia.com</p>
                        </div>
                        <div>
                            <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="navi4">Get the latest information</p>
                            <div className="navi3">
                                <input data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" type="email" placeholder="Email Address" />
                                <button data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200"><IoMdSend /></button>
                            </div>
                        </div>

                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <hr data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="line2" />
                </div>
                <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="navi8">
                    <p>Copyright&copy; Harmonia All Right Reserved.</p>
                    <p>User Terms & Conditions | Privacy policy</p>
                </div>
            </div>
        </section>



    )
}

export default Footer;