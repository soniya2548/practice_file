
import React, { useState, useEffect } from 'react';



const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);
    // Clock code-------

    const [time, setTime] = useState({
        hr: 0,
        min: 0,
        sec: 0,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const d = new Date();
            const hr = d.getHours();
            const min = d.getMinutes();
            const sec = d.getSeconds();
            const hr_rotation = 30 * hr + min / 2; 
            const min_rotation = 6 * min;
            const sec_rotation = 6 * sec;

            setTime({ hr: hr_rotation, min: min_rotation, sec: sec_rotation });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // Top Up Button---------

    const scrollFunction = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
    useEffect(() => {
        window.addEventListener('scroll', scrollFunction);
        return () => {
          window.removeEventListener('scroll', scrollFunction);
        };
      }, []);

    const topFunction = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      };
    return (
        <>
        {isVisible &&
            <button onClick={topFunction} id="topUpBtn"></button>
        }
            <div className="whatsp-icon">
                <a href="https://api.whatsapp.com/send?phone=919818045855" className="float" target="_blank">
                    <img src="assets/img/icons/whatsapp-mobi.png" alt="whatsapp-mobi" />
                </a>
            </div>
            <div className="phone-icon">
                <a href="tel:+91-9818045855" className="phone-float" target="_blank">
                    <img src="assets/img/icons/h-call.png" alt="h-call" />
                </a>
            </div>

            <section className="footer">
                <div className="container">
                    <div className="footer_col">
                        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-4 justify-content-center">
                            <div className="col f-adr-sec">
                                <h3 className="foot-lable widget-title">
                                    Our Location
                                </h3>
                                <ul className="f-items">
                                    <li className="f-addr">
                                        <a href>Room no 14, 4th Floor OPD Medanta The Medicity CH
                                            Bakhtawar Singh Rd Sector 38, Gurugram
                                            Haryana 122001</a>
                                    </li>
                                    <li className="footer-list" id="footer-add-sec">
                                        |
                                    </li>
                                    <li>
                                        <a href="mailto:drbelalbinasaf@gmail.com"> Email:
                                            drbelalbinasaf@gmail.com </a>
                                    </li>
                                    <li>
                                        <a href="tel:+919818045855">Phone: +919818045855</a>
                                    </li>
                                    <li className="footer-list" id="footer-add-sec">
                                        |
                                    </li>
                                    <li className="f-social-icon">
                                        <span>
                                            <a href="https://www.youtube.com/@drbelalbinasaf" target="_blank">
                                                <img src="assets/img/social-icons/f-youtube.png" alt="f-youtube" className="head-social-icons" />
                                                <img src="assets/img/social-icons/hover-youtube.png" alt="f-youtube" className="hover-social-icons" />
                                            </a>
                                            <a href="https://www.facebook.com/Dr.BelalBinAsaf/" target="_blank">
                                                <img src="assets/img/social-icons/f-fb.png" alt="f-fb" className="head-social-icons" />
                                                <img src="assets/img/social-icons/hover-fb.png" alt="f-fb" className="hover-social-icons" />
                                            </a>
                                            <a href="https://www.linkedin.com/" target="_blank">
                                                <img src="assets/img/social-icons/f-linkdin.png" alt="f-linkdin" className="head-social-icons" />
                                                <img src="assets/img/social-icons/hover-linkedin.png" alt="f-linkdin" className="hover-social-icons" />
                                            </a>
                                            <a href="https://www.instagram.com/" target="_blank">
                                                <img src="assets/img/social-icons/f-insta.png" alt="f-insta" className="head-social-icons" />
                                                <img src="assets/img/social-icons/hover-instagram.png" alt="f-insta" className="hover-social-icons" />
                                            </a>
                                            <a href="https://x.com/DrBelalBinAsaf" target="_blank">
                                                <img src="assets/img/social-icons/f-twitter.png" alt="f-twitter" className="head-social-icons" />
                                                <img src="assets/img/social-icons/hover-twitter.png" alt="f-twitter" className="hover-social-icons" />
                                            </a>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col ">
                                <h3 className="foot-lable widget-title">
                                    About Us
                                </h3>
                                <ul className="f-items">
                                    <li>
                                        <a href="introduction-and-experience.html">Introduction &
                                            Experience </a>
                                    </li>
                                    <li className="footer-list">
                                        |
                                    </li>
                                    <li>
                                        <a href="publications.html">Publications</a>
                                    </li>
                                    <li className="footer-list">
                                        |
                                    </li>
                                    <li>
                                        <a href="awards-and-recognitions.html"> Awards and Recognitions
                                        </a>
                                    </li>
                                    <li className="footer-list">
                                        |
                                    </li>
                                    <li>
                                        <a href="national-and-international-achievements.html">National
                                            and International Accomplishments </a>
                                    </li>
                                    <li className="footer-list">
                                        |
                                    </li>
                                    <li className="footer-list">
                                        |
                                    </li>
                                    <li>
                                        <a href="videos.html">Videos </a>
                                    </li>
                                    <li className="footer-list">
                                        |
                                    </li>
                                    <li>
                                        <a href="https://drbelalbinasaf.com/blog/">Blog</a>
                                    </li>
                                    <li className="footer-list">
                                        |
                                    </li>
                                    <li>
                                        <a href="contact-us.html">Contact Us </a>
                                    </li>
                                    <li className="footer-list">
                                        |
                                    </li>
                                    <li>
                                        <a href="https://maps.app.goo.gl/S7SnBhunk3hVNJYA7"> Testimonial </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col">
                                <h3 className="foot-lable widget-title">
                                    Our Treatment
                                </h3>
                                <ul className="f-items">
                                    <li>
                                        <a href="lung-cancer.html">Lung Cancer Program </a>
                                    </li>
                                    <li className="footer-list">
                                        |
                                    </li>
                                    <li>
                                        <a href="bronchiectasis.html"> Bronchiectasis </a>
                                    </li>
                                    <li className="footer-list">
                                        |
                                    </li>
                                    <li>
                                        <a href="robotic-thymectomy.html"> Robotic Thymectomy </a>
                                    </li>
                                    <li className="footer-list">
                                        |
                                    </li>
                                    <li>
                                        <a href="thymoma.html">Thymoma</a>
                                    </li>
                                    <li className="footer-list">
                                        |
                                    </li>
                                    <li>
                                        <a href="lung-nodules.html">Lung Nodules</a>
                                    </li>
                                    <li className="footer-list">
                                        |
                                    </li>
                                    <li>
                                        <a href="covid.html">Covid Resources </a>
                                    </li>
                                    <li className="footer-list">
                                        |
                                    </li>
                                    <li>
                                        <a href="opd.html">OPD</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col sm-p-0 ">
                                <h3 className="foot-lable">
                                    Work Time
                                </h3>
                                <div className="timing-box mt-5">
                                    <h6>Out-Patient(OPD)Timing</h6>
                                    <ul className="time">
                                        <li>10AM - 02PM</li>
                                        <li>04PM - 06PM</li>
                                    </ul>
                                    <div className="time-shedule">
                                        Monday - Saturday
                                    </div>
                                    <div className="clock">
                                        <div
                                            className="hour-hand"
                                            style={{ transform: `rotate(${time.hr}deg)` }}
                                        ></div>
                                        <div
                                            className="minute-hand"
                                            style={{ transform: `rotate(${time.min}deg)` }}
                                        ></div>
                                        <div
                                            className="second-hand"
                                            style={{ transform: `rotate(${time.sec}deg)` }}
                                        ></div>
                                    </div>
                                </div>
                                <div className="f-time-schedule">
                                    <h5>OUT-PATIENT(OPD) TIMING</h5>
                                    <p>Morning: 10:00AM - 2:00PM</p>
                                    <p>Evening 4:00PM - 6:00PM(Mon to Sat)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="footer-bottom">
                <p> ©
                    <span id="currentYear">2024</span>
                    <span><a href="index.html" target="_blank">Dr.Belal Bin Asaf</a>
                        Designed by
                    </span>
                    <span><a href="https://abym.in" target="_blank">AbyM
                        Technology</a>
                    </span>
                </p>
            </section>
        </>
    )
}

export default Footer