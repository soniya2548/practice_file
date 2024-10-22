import React from "react";
import Slider from "react-slick";


const BannerSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "0px",
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <>
            <div className="home-bannr-slider">
                <Slider {...settings}>
                    <div className="slide-item">
                        <div className="banner-area">
                            <img src="assets/img/banner/home-bannr.png" alt="home-bannr" className="home-banner-web" />
                            <img src="assets/img/banner/home-bannr-mob.png" alt="home-bannr" className="home-banner-mob" />
                            <div className="bannr-cont">
                                <h1>THORACOSCOPIC SURGERY OF CHEST</h1>
                                <h3>State of Art Minimal Invasive Lung Surgery (Key-Hole
                                    Surgery)</h3>
                                <p>Less Invasive Chest Procedure: Smaller Incisions, Camera Guided,
                                    Faster Recovery.</p>
                            </div>
                        </div>
                    </div>
                    <div className="slide-item">
                        <div className="banner-area">
                            <img src="assets/img/banner/home-bannr-1.png" alt="home-bannr-1" className="home-banner-web" />
                            <img src="assets/img/banner/home-bannr-mob-1.png" alt="home-bannr-1" className="home-banner-mob" />
                            <div className="bannr-cont second-slide">
                                <h1>Pioneering Experience in <span>Robotic
                                    Thoracic</span> <strong> Surgery</strong>
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="slide-item">
                        <div className="banner-area">
                            <img src="assets/img/banner/home-bannr-2.png" alt="home-bannr-2" className="home-banner-web" />
                            <img src="assets/img/banner/home-bannr-mob-2.png" alt="home-bannr-2" className="home-banner-mob" />
                            <div className="bannr-cont third-slide">
                                <h1>Minimally Invasive <span> Lung Cancer
                                    Surgeon</span><strong>(VATS /
                                        Robotic)</strong></h1>
                            </div>
                        </div>
                    </div>
                    <div className="slide-item">
                        <div className="banner-area">
                            <img src="assets/img/banner/home-bannr-3.png" alt="home-bannr-3" className="home-banner-web" />
                            <img src="assets/img/banner/home-bannr-mob-3.png" alt="home-bannr-3" className="home-banner-mob" />
                            <div className="bannr-cont fourth-slide">
                                <h1 className="animate__bounceIn">Over <strong>20 Years</strong> of
                                    <strong>Experience</strong> in <span>Thoracic
                                        Surgery</span>
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="slide-item">
                        <div className="banner-area">
                            <img src="assets/img/banner/home-bannr-4.png" alt="home-bannr-4" className="home-banner-web" />
                            <img src="assets/img/banner/home-bannr-mob-4.png" alt="home-bannr-4" className="home-banner-mob" />
                            <div className="bannr-cont fifth-slide">
                                <h1 className="animate__bounceIn">Performed <strong>Over 4000 Minimally
                                    Invasive</strong><span>Chest
                                        Surgeries</span></h1>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    );
}
export default BannerSlider;