import React from "react";
import Slider from "react-slick";



const ChestSurSlider = () => {
    const settings = {
        dots: true,
        slidesToShow: 3.1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        // centerMargin: '40px',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1.1,
                    dots: true,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '20px', // Adjust padding for smaller screens
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '20px', // Adjust padding for smaller screens
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerPadding: '30px', // Adjust padding for smaller screens
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '40px', // Adjust padding for smaller screens
                },
            },
        ],
    };

    return (
        <>
            <section className="chest-surgeon">
                <div className="container">
                    <div className="heading-sec">
                        <div className="main-head">
                            <h2>Chest Surgery at Our Centre</h2>
                            <p>
                                We offer comprehensive care for all thoracic disease-related surgical procedures, with particular expertise in robotic, video-assisted, and conventional thoracic surgery.
                            </p>
                        </div>
                        <div className="explore-btn">
                            <a href="chest-surgeon-list.html">
                                Explore All
                                <span>
                                    <img src="assets/img/icons/arrow-2.png" alt="arrow-2" />
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="chestSlider">
                        <Slider {...settings}>
                            <div className="slider-item">
                                <div className="card chest-card">
                                    <img src="assets/img/post/chest-surgeon-1.png" className="card-img-top" alt="chest-surgeon-1" />
                                    <div className="card-body chest-card-cont">
                                        <div className="d-flex justify-content-center align-items-center">
                                            <h5 className="card-title chest-card-head">Myasthenia Gravis</h5>
                                        </div>
                                        <p className="card-text">
                                            Myasthenia Gravis is an auto immune disease which is characterised by weakness and rapid fatigue of the muscles which are under our voluntary control
                                        </p>
                                        <div className="chest-card-btn">
                                            <div className="h-bannr-btn mt-2">
                                                <button className="btn btn-primary">
                                                    View More
                                                    <span>
                                                        <img src="assets/img/icons/btn-arrow.png" alt="btn-arrow" />
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-item">
                                <div className="card chest-card">
                                    <img src="assets/img/post/chest-surgeon-2.png" className="card-img-top" alt="chest-surgeon-2" />
                                    <div className="card-body chest-card-cont">
                                        <div className="d-flex justify-content-center align-items-center">
                                            <h5 className="card-title chest-card-head">Lung Cancer</h5>
                                        </div>
                                        <p className="card-text">
                                            Lung cancer is not a single disease but rather a group of cancers that develop in the lung. cancer occurs when cells mutate (change abnormally) and begin growing out of control.
                                        </p>
                                        <div className="chest-card-btn">
                                            <div className="h-bannr-btn mt-2">
                                                <button className="btn btn-primary">
                                                    View More
                                                    <span>
                                                        <img src="assets/img/icons/btn-arrow.png" alt="btn-arrow" />
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-item">
                                <div className="card chest-card">
                                    <img src="assets/img/post/chest-surgeon-3.png" className="card-img-top" alt="chest-surgeon-3" />
                                    <div className="card-body chest-card-cont">
                                        <div className="d-flex justify-content-center align-items-center">
                                            <h5 className="card-title chest-card-head">Empyema Thoracis</h5>
                                        </div>
                                        <p className="card-text">
                                            Empyema is a collection of pus in the cavity between the lung and the membrane that surrounds it (pleural space).
                                        </p>
                                        <div className="chest-card-btn">
                                            <div className="h-bannr-btn mt-2">
                                                <button className="btn btn-primary">
                                                    View More
                                                    <span>
                                                        <img src="assets/img/icons/btn-arrow.png" alt="btn-arrow" />
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-item">
                                <div className="card chest-card">
                                    <img src="assets/img/post/chest-surgeon-4.png" className="card-img-top" alt="chest-surgeon-4" />
                                    <div className="card-body chest-card-cont">
                                        <div className="d-flex justify-content-center align-items-center">
                                            <h5 className="card-title chest-card-head">Thymoma</h5>
                                        </div>
                                        <p className="card-text">
                                            Empyema is a collection of pus in the cavity between the lung and the membrane that surrounds it (pleural space).
                                        </p>
                                        <div className="chest-card-btn">
                                            <div className="h-bannr-btn mt-2">
                                                <button className="btn btn-primary">
                                                    View More
                                                    <span>
                                                        <img src="assets/img/icons/btn-arrow.png" alt="btn-arrow" />
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-item">
                                <div className="card chest-card">
                                    <img src="assets/img/post/chest-surgeon-4.png" className="card-img-top" alt="chest-surgeon-4" />
                                    <div className="card-body chest-card-cont">
                                        <div className="d-flex justify-content-center align-items-center">
                                            <h5 className="card-title chest-card-head">Thymoma</h5>
                                        </div>
                                        <p className="card-text">
                                            Empyema is a collection of pus in the cavity between the lung and the membrane that surrounds it (pleural space).
                                        </p>
                                        <div className="chest-card-btn">
                                            <div className="h-bannr-btn mt-2">
                                                <button className="btn btn-primary">
                                                    View More
                                                    <span>
                                                        <img src="assets/img/icons/btn-arrow.png" alt="btn-arrow" />
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
            
            <div className="Corporate-Office">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="Office-col-cont">
                                <h5>
                                    Clinic Address
                                </h5>
                                <h4 className="sub-head">
                                    Room no 14, 4th Floor OPD Medanta- The Medicity CH Bakhtawar Singh
                                    Rd Sector 38, Gurugram
                                    Haryana - 122001
                                </h4>
                                <ul>
                                    <li>
                                        <div className="h-mobile">
                                            <span><img src="assets/img/icons/h-call.png" alt="h-call" /></span>
                                            <p>
                                                +91-9818045855
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="h-mobile">
                                            <span><img src="assets/img/icons/h-mail.png" alt="h-mail" /></span>
                                            <p>
                                                drbelalbinasaf@gmail.com
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                                <h5 className="better-head">
                                    Better Technologies for Better Healthcare
                                </h5>
                                <p className="cont">
                                    <strong>Robotic Surgery, or Robot-Assisted Surgery,</strong> is
                                    the state of art technology that allows
                                    surgeons to perform complex procedures with extreme control and
                                    precision. Major Chest surgery procedures
                                    can be done with small incisions leading to early
                                    recovery with lesser pain. His Team Ensured I
                                    Felt Confident And Supported.Grateful For His Expertise.
                                </p>
                                <p className="cont">
                                    <strong> Video Assisted Thoracic Surgery(VATS)- </strong>a method
                                    that allows many surgical conditions of
                                    Lung and other organs in chest to be performed through small
                                    (Key-hole) incisions that reduces trauma of
                                    surgery and aids in faster recovery. His Team Ensured I
                                    Felt Confident And Supported.Grateful
                                    For His Expertise.
                                </p>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="book-appoint" id="appointmentForm">
                                <form className="form-group">
                                    <div className="form-head">
                                        <h3>Book An Appointment</h3>
                                        <p>Secure Your Spot With India's Top Thoracoscopic Surgeon. Book
                                            Now For Expert Care And Optimal
                                            Results. Don't Miss Out!</p>
                                    </div>
                                    <div className="form-lists">
                                        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2">
                                            <div className="col">
                                                <div className="form-item">
                                                    <div className="form-icons"><img src="assets/img/icons/form-user.png" alt="form-user" /></div>
                                                    <div className="form-field">
                                                        <label className="form-control-label">First name</label>
                                                        <input type="text" name="fname" placeholder="Enter your name" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-item">
                                                    <div className="form-icons"><img src="assets/img/icons/form-email.png" alt="form-email" /></div>
                                                    <div className="form-field">
                                                        <label className="form-control-label">Email ID</label>
                                                        <input type="email" name="email" placeholder="Enter Email ID" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-item">
                                                    <div className="form-icons"><img src="assets/img/icons/form-call.png" alt="form-call" /></div>
                                                    <div className="form-field">
                                                        <label className="form-control-label">Mobile Number</label>
                                                        <input type="number" name="number" placeholder="10 Digit Mobile Number" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-item">
                                                    <div className="form-icons"><img src="assets/img/icons/form-calender.png" alt="form-calender" /></div>
                                                    <div className="form-field">
                                                        <label className="form-control-label">Date</label>
                                                        <input type="text" name="date" placeholder="mm/dd/yyyy" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-item">
                                                    <div className="form-icons"> <img src="assets/img/icons/form-age.png" alt="form-age" /></div>
                                                    <div className="form-field">
                                                        <label className="form-control-label">Age</label>
                                                        <input type="text" name="age" placeholder="Enter Age" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-item">
                                                    <div className="form-icons"><img src="assets/img/icons/form-treatement.png" alt="form-treatement" /></div>
                                                    <div className="form-field" id="topup-icon">
                                                        <label className="form-control-label">Treatment</label>
                                                        <select name="treatment" placeholder="Enter Treatment">
                                                            <option value="0" className="form-drop-select">Enter
                                                                Treatment</option>
                                                            <option value="1">Select Treatment</option>
                                                            <option value="2">Enter Treatment 2</option>
                                                            <option value="3">Enter Treatment 3</option>
                                                            <option value="4">Enter Treatment 4</option>
                                                        </select>
                                                        <img src="./assets/img/icons/top-bottom.png" alt="top-bottom" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="submit-btn">
                                            <div className="h-bannr-btn mt-2 ">
                                                <button className="btn btn-primary">Submit
                                                    <span><img src="assets/img/icons/btn-arrow.png" alt="btn-arrow" /></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ChestSurSlider;