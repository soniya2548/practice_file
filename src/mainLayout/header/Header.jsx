import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className="header-portion">
                <div className="main-headr">
                    <div className="top-head">
                        <div className="logo-sec">
                            <div className="agr-logo">
                                <Link to="/">
                                    <img src="/assets/img/logo/logo.png" alt="logo" className="logo-web" />
                                    <img src="/assets/img/logo/logo-mobi.png" alt="logo" className="logo-mobi" />
                                </Link>
                            </div>
                        </div>
                        <div className="head-info">
                            <ul className="h-social">
                                <li>
                                    <a href="mailto:drbelalbinasaf@gmail.com">
                                        <img src="assets/img/icons/h-mail.png" alt="h-mail" />
                                        drbelalbinasaf@gmail.com
                                    </a>
                                </li>
                                <li>
                                    Follow Us:
                                    <span>
                                        <a href="https://www.youtube.com/@drbelalbinasaf" target="_blank">
                                            <img src="/assets/img/social-icons/h-social-youtube.png" alt="h-social-youtube" className="head-social-icons" />
                                            <img src="assets/img/social-icons/hover-youtube.png" alt="h-social-youtube" className="hover-social-icons" />
                                        </a>
                                        <a href="https://www.facebook.com/Dr.BelalBinAsaf/" target="_blank">
                                            <img src="assets/img/social-icons/h-social-fb.png" alt="h-social-fb" className="head-social-icons" />
                                            <img src="assets/img/social-icons/hover-fb.png" alt="h-social-fb" className="hover-social-icons" />
                                        </a>
                                        <a href="https://www.linkedin.com/in/dr-belal-bin-asaf" target="_blank">
                                            <img src="assets/img/social-icons/h-social-linkedin.png" alt="h-social-linkedin" className="head-social-icons" />
                                            <img src="assets/img/social-icons/hover-linkedin.png" alt="h-social-linkedin" className="hover-social-icons" />
                                        </a>
                                        <a href="https://www.instagram.com/drbelalbinasaf/" target="_blank">
                                            <img src="assets/img/social-icons/h-social-instagram.png" alt="h-social-instagram" className="head-social-icons" />
                                            <img src="assets/img/social-icons/hover-instagram.png" alt="h-social-instagram" className="hover-social-icons" />
                                        </a>
                                        <a href="https://x.com/DrBelalBinAsaf" target="_blank">
                                            <img src="assets/img/social-icons/h-social-twitter.png" alt="h-social-twitter" className="head-social-icons" />
                                            <img src="assets/img/social-icons/hover-twitter.png" alt="h-social-twitter" className="hover-social-icons" />
                                        </a>
                                    </span>
                                </li>
                            </ul>
                            <ul className="head-btn-sec mt-3">
                                <li className="h-appoint">
                                    <a href="tel:+91-9818045855">
                                        <img src="assets/img/icons/h-call.png" alt="h-call" />
                                        <b>+91-9818045855</b>
                                    </a>
                                    <a href="https://api.whatsapp.com/send?phone=919818045855" target="_blank">
                                        <img src="assets/img/icons/whatsapp-mobi.png" alt="whatsapp-mobi" className="h-whatsapp" />
                                    </a>
                                </li>
                                <li className="h-appoint">
                                    <a href="https://api.whatsapp.com/send?phone=919818045855" className="btn btn-primary">
                                        Appointment</a>
                                </li>
                                <li>
                                    <a href="#" className="btn btn-primary">OPD
                                        <span>
                                            <img src="assets/img/icons/head-drop-icon.png" alt="head-drop-icon" className="drop-white" />
                                            <img src="assets/img/icons/head-drop-icon-clr.png" alt="head-drop-icon" className="drop-black" />
                                        </span>
                                    </a>
                                    <ul className="sub-nav-links dropdown-menu">
                                        <li><a href="opd.html">Noida</a></li>
                                        <li><a href="opd.html">Gurugram</a></li>
                                        <li><a href="opd.html">Delhi</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <nav className="navigation">
                        <div className="col-md-12 pd-0">
                            <div className="headr-combo">
                                <div className="hamburger">
                                    <span></span>
                                    <span className="side-menu-sign"></span>
                                    <span></span>
                                </div>
                                <div className="desk-header">

                                    <ul className="nav-list">

                                        <div className="mob-logo-2 d-md-none d-block">
                                            <Link to="/">
                                                <img src="../assets/img/logo/logo.png" alt="logo" />
                                            </Link>
                                        </div>
                                        <li className="active">
                                            <a href="index.html">
                                                <img src="assets/img/icons/home.png" alt="home" className="home-off-hover" />
                                                <img src="assets/img/icons/home-hover.png" alt="home" className="home-on-hover" />
                                            </a>
                                        </li>
                                        <li className="head-desh">
                                            |
                                        </li>
                                        <li>
                                            <a href="#" className>
                                                <span className="side-menu-list">
                                                    <img src="assets/img/icons/profile.png" alt="profile" />
                                                </span>
                                                Meet Dr. Belal Bin Asaf
                                                <span className="drop-arrow-icon">
                                                    <img src="assets/img/icons/head-drop-icon.png" alt="head-drop-icon" className="drop-white" />
                                                    <img src="assets/img/icons/head-drop-icon-clr.png" alt="head-drop-icon" className="drop-black" />
                                                    <img src="assets/img/icons/hover-drop-icon.png" alt="head-drop-icon" className="drop-orange" />
                                                </span>
                                            </a>
                                            <ul className="sub-nav-links dropdown-menu">
                                                <li><a href="introduction-and-experience.html">Introduction &
                                                    Experience</a></li>
                                                <li><a href="publications.html">Publications</a></li>
                                                <li><a href="awards-and-recognitions.html">Awards and
                                                    Recognitions</a></li>
                                                <li><a href="national-and-international-achievements.html">National
                                                    & International
                                                    Accomplishments</a></li>
                                            </ul>
                                        </li>
                                        <li className="head-desh">
                                            |
                                        </li>
                                        <li className>
                                            <a href="#">
                                                <span className="side-menu-list">
                                                    <img src="assets/img/icons/conditions-treated.png" alt="conditions-treated" />
                                                </span>
                                                Conditions Treated
                                                <span className="drop-arrow-icon">
                                                    <img src="assets/img/icons/head-drop-icon.png" alt className="drop-white" />
                                                    <img src="assets/img/icons/head-drop-icon-clr.png" alt="head-drop-icon" className="drop-black" />
                                                    <img src="assets/img/icons/hover-drop-icon.png" alt="head-drop-icon" className="drop-orange" />
                                                </span>
                                            </a>
                                            <ul className="sub-nav-links dropdown-menu">
                                                <li><a href="lung-cancer.html">Lung Cancer</a></li>
                                                <li><a href="lung-nodules.html">Lung Nodules (Spots in Lung)</a></li>
                                                <li><a href="myasthenia-gravis.html">Myasthenia Gravis</a></li>
                                                <li><a href="mediastinal-tumour.html">Mediastinal Tumours</a></li>
                                                <li><a href="thymoma.html">Thymoma</a></li>
                                                <li><a href="robotic-thymectomy.html">Robotic Thymectomy</a></li>
                                                <li><a href="chest-wall-tumours.html">Chest Wall Tumour</a></li>
                                                <li><a href="pneumothorax.html">Pneumothorax (air around the
                                                    lungs)</a></li>
                                                <li><a href="pleural-effusion.html">Pleural Effusion (Fluid in the
                                                    chest)</a></li>
                                                <li><a href="empyema-treatment.html">Empyema (pus around the lung)</a></li>
                                                <li><a href="bronchiectasis.html">Bronchiectasis</a></li>
                                                <li><a href="tracheal-stenosis.html">Tracheal Stenosis</a></li>
                                                <li><a href="hempotysis.html">Hempotysis</a></li>
                                            </ul>
                                        </li>
                                        <li className="head-desh">
                                            |
                                        </li>
                                        <li className>
                                            <Link to="/robotic-surgery">
                                                <span className="side-menu-list">
                                                    <img src="assets/img/icons/robotic.png" alt="robotic" />
                                                </span>
                                                Robotic Surgery
                                            </Link>
                                        </li>
                                        <li className="head-desh">
                                            |
                                        </li>
                                        <li className>
                                            <Link to="/vats-surgery">
                                                <span className="side-menu-list">
                                                    <img src="assets/img/icons/vats-surgery.png" alt="vats-surgery" />
                                                </span>
                                                VATS Surgery
                                            </Link>
                                        </li>
                                        <li className="head-desh">
                                            |
                                        </li>
                                        <li className>
                                            <Link to="cancer-program">
                                                <span className="side-menu-list">
                                                    <img src="assets/img/icons/cancer-program.png" alt="cancer-program" />
                                                </span>
                                                Cancer Program
                                            </Link>
                                        </li>
                                        <li className="head-desh">
                                            |
                                        </li>
                                        <li className>
                                            <a href="https://drbelalbinasaf.com/blog/" target="_blank">
                                                <span className="side-menu-list">
                                                    <img src="assets/img/icons/blog.png" alt="blog" />
                                                </span>
                                                Blog
                                            </a>
                                        </li>
                                        <li className="head-desh">
                                            |
                                        </li>
                                        <li className>
                                            <a href="case-studies.html">
                                                <span className="side-menu-list">
                                                    <img src="assets/img/icons/case-studies.png" alt="case-studies" />
                                                </span>
                                                Case Studies
                                            </a>
                                        </li>
                                        <li className="head-desh">
                                            |
                                        </li>
                                        <li className>
                                            <a href="contact-us.html">
                                                <span className="side-menu-list">
                                                    <img src="assets/img/icons/contact.png" alt="contact" />
                                                </span>
                                                Contact Us
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Header;