import React from "react";
import Services from "../jsComponents/services";
import { FaCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import image1 from "../images/handwriting3.jpeg";
import image2 from "../images/handwriting4.jpeg";
import image3 from "../images/handwriting5.jpeg";





function Service() {
    function CreateService(props) {
        return (
            <div className="box1">

                <div className="iconn">
                    <div className="icon1">
                        <img className="icon" src={props.icon} />
                    </div>
                </div>


                <p className="head1">{props.header}</p>
                <p style={{ whiteSpace: "pre-wrap" }} className="notes">{props.notes}</p>
                <button className="arrow">{props.learn} <span ><FaArrowRight /></span></button>
            </div>
        )
    }

    function MyService(Services) {
        return (
            <CreateService
                key={Services.id}
                icon={Services.icon}
                header={Services.header}
                notes={Services.notes}
                learn={Services.learn}
            />
        )
    }

    return (

        <div>
            <div className="serv">
                <div>
                    <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="service1"><span><FaCircle /></span>Services We Provide</p>
                    <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="service2">Personalized Therapy & Mental Wellness<br />Services Designed for You</p>
                </div>
                <div className="boxxx">
                    <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="boxx">
                        {Services.map(MyService)}
                    </div>
                </div>

            </div>
            <div style={{ paddingTop: "30px" }}>
                <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="service1"><span><FaCircle /></span>How It Works</p>
                <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="service2">The Process of Archieving<br />Mental Wellness</p>
                <div className="steppp">
                    <div className="stepp">
                        <div className="stepo">
                            <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="step1">01</p>
                            <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="step2">Take a Quick Assessment</p>
                            <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="step3">Answer a few simple questions to help us<br />understand your needs and preferences</p>
                            <img data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" src={image1} />
                        </div>
                        <div className="stepo">
                            <img data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" src={image2} />
                            <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="step10">02</p>
                            <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="step20">Get Matched with a Therapist</p>
                            <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="step30">We will connect you with a qualified <br />therapist who specializes in your area of<br /> concern</p>
                        </div>
                        <div className="stepo">
                            <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="step1">03</p>
                            <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="step2">Start Therapy Your Own Way</p>
                            <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="step3">Choose between chat, phone, or video<br />sessions-whatever feels right for you.</p>
                            <img data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" src={image3} />
                        </div>
                    </div>

                </div>
                <div className="stepbtn">
                    <button data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">Start Your Healing Journey</button>
                </div>
            </div>

            <div className="gett">
                <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="get">Get <span>$25 Offer</span> your<br />first purchase</p>
                <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="get2">Subscribe to newsletters and get the first look at new products and updates</p>
                <div className="get3">
                    <input data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" type="email" placeholder="Email Address" />
                    <button data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200"><FaArrowRight /></button>
                </div>
            </div>
        </div>

    );
}

export default Service;
