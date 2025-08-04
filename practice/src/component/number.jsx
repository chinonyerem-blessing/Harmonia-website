import React from "react";
import Number from "../jsComponents/numbers";
import video from "../images/therapyVideo.mp4";
import videoSec from "../jsComponents/videoSection";



function Numbers() {


    function Num(props) {
        return (
            <div>
                <p className="number">{props.number}</p>
                <p className="description">{props.Description}</p>
            </div>
        )
    }

    function createNum(Number) {
        return (
            <Num
                key={Number.id}
                number={Number.number}
                Description={Number.Description}
            />
        )
    }

    function VideoC(props) {
        return (
            <div className="videopara">
                <div>
                    <p className="numb">{props.num}</p>
                </div>
                <div>
                    <p className="option">{props.option}</p>
                    <p className="note" style={{ whiteSpace: "pre-wrap" }}>{props.note}</p>
                </div>

            </div>
        )
    }
    function videoCard(videoSec) {
        return (
            <VideoC
                key={videoSec.id}
                num={videoSec.num}
                option={videoSec.option}
                note={videoSec.note}
            />
        )
    }
    return (
        <section id="number">

            <div>
                <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="nums">
                    {Number.map(createNum)}
                </div>
                <div className="videoSEC">
                    <div className="vid">
                        <video data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="video" src={video} controls />
                    </div>
                    <div className="vid2">
                        <div>
                            <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200"v className="why">Why Us</p>
                            <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="well-being">Your well-being is our priority</p>
                            <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">
                                {videoSec.map(videoCard)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="learn">
                    <button data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">Learn More</button>
                </div>


            </div>
        </section>
    )
}


export default Numbers;
