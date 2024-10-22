import React from 'react'

const RoboticSurgeryPage = () => {
    return (
        <>

            <section className="banner-area" id="robo-surgery-bnnr">
                <img src="assets/img/banner/robotic-surgery-bannr.png" alt="robotic-surgery-bannr" className="home-banner-web" />
                <img src="assets/img/banner/robotic-surgery-bannr-mob.png" alt="robotic-surgery-bannr" className="home-banner-mob" />
                <div className="bannr-cont">
                    <h2><span>Future Of Robotic Surgery</span></h2>
                    <h3>The New Paradigm in<span> Surgical Treatment</span></h3>
                    <p>
                        A new paradigm in surgical treatment. Explore advanced techniques with India's leading thoracoscopic
                        surgeon.
                    </p>
                </div>
            </section>
            <section className="Thoracic_Oncology" id="robotic-surgery">
                <div className="container">
                    <div className="Thoracic_Oncol_head">
                        <h2>Robotic Surgery</h2>
                    </div>
                    <div className="robo-surgery">
                        <h3>What is Robotic Surgery ?</h3>
                        <p>
                            Robotic Surgery is an advanced form of minimally invasive (key hole) surgery for various chest
                            diseases which involves the use of the state of art Surgical Robot to perform surgery inside the
                            chest using 3-5 small (1-1.5 cm) cuts instead of conventional open surgery.
                        </p>
                        <p>
                            The robotic system consists of three main parts
                        </p>
                    </div>
                    <div className="surg-console">
                        <img src="assets/img/banner/surgeon-console.png" alt="surgeon-console" className="surg-console-web" />
                        <img src="assets/img/banner/surgeon-console-mobi.png" alt="surgeon-console" className="surg-console-mobi" />
                        <div className="surg-cont-1">
                            <h3>
                                The Surgeon Console
                            </h3>
                            <p>
                                It is the command centre which the lead surgeon uses to perform the surgery. It has a
                                binocular view-finder which provides a magnified high definition stereoscopic (3D) vision of
                                the inside of the chest cavity and has master controllers which the surgeon uses to perform
                                the surgery.
                            </p>
                        </div>
                        <div className="surg-cont-2">
                            <h3>
                                The Patient Cart with Robotic Arms
                            </h3>
                            <p>
                                The patient cart consists of the surgical system’s arms which hold the specialised ports
                                (hollow metallic tubes) through which highly specialised wristed robotic instruments are
                                inserted inside the chest cavity.
                            </p>
                        </div>
                    </div>
                    <div className="robo-surgery robo-vision-cart">
                        <h3>The Vision Cart</h3>
                        <p>
                            The vision cart is the link between the surgeon console and patient cart and houses the specialised
                            Endo-vision system.
                        </p>
                    </div>
                    <div className="robo-surgery robo-work">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="robo-work-cont">
                                    <h3>
                                        How does it work ?
                                    </h3>
                                    <p>
                                        The patient is given general anaesthesia. And after preparations the surgeon makes 3-5
                                        small 1-1.5
                                        cms cuts on the chest through which he introduces specialised robotic ports (metallic
                                        Hollow tube).
                                        The patient cart is then attached to these ports through which specialised instruments
                                        are
                                        introduced. The lead surgeon then sits on the surgeon console and uses the master
                                        controllers to
                                        control the robotic instruments which work like miniature human hands and carry out the
                                        procedure
                                        with incredible preciseness.
                                    </p>
                                    <div className="h-bannr-btn">
                                        <button className="btn btn-primary">Appointment
                                            <span><img src="assets/img/icons/btn-arrow.png" alt="btn-arrow" /></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6"></div>
                        </div>
                    </div>
                    <div className="robo-advantages">
                        <div className="robo-advac-surg">
                            <h3>Advantages of Robotic Surgery</h3>
                            <p>The robotic surgical system is an advancement over the conventional minimally invasive (key Hole)
                                surgery. It offers</p>
                            <ul className="rob-surgery">
                                <li>
                                    Better Magnification
                                </li>
                                <li>
                                    Stereoscopic 3 D Vsison With Better Depth Perception
                                </li>
                                <li>
                                    More Precise Movements With Filtration Of Tremors
                                </li>
                                <li>
                                    Adds The Power Of Human Wrist At The To The Instruments
                                    Allowing For A Much Finer And Natural Movement
                                </li>
                            </ul>
                        </div>
                        <div className="robo-advac-surg" id="robo-tect-advac">
                            <h3>These technological advantages translates into</h3>
                            <ul>
                                <li>
                                    Lesser Blood Loss
                                </li>
                                <li>
                                    Lesser Pain After Surgery
                                </li>
                                <li>
                                    Lower Incidence Of Post-Op Pneumonia
                                </li>
                                <li>
                                    Reduced Duration Of Hospital Stay
                                </li>
                                <li>
                                    Reduced Use Of Pain Medication
                                </li>
                                <li>
                                    Earleier Return To Work
                                </li>
                                <li>
                                    No Rib Fractures During Surgery
                                </li>
                                <li>
                                    Better Cosmetic Results
                                </li>
                            </ul>
                        </div>
                        <div className="robo-advac-surg">
                            <h3>Procedures done using the Robotic</h3>
                            <ul>
                                <li>
                                    Robotic Thymectomy For Myasthenia Gravis.
                                </li>
                                <li>
                                    Robotic Thymectomy For Thymoma.
                                </li>
                                <li>
                                    Robotic Lobectomy For Lung Cancer/Other Diseases.
                                </li>
                                <li>
                                    Robotic Excision Of Anterior Mediastinal Mass (Dermoid Cyst)
                                </li>
                                <li>
                                    Robotic Excision Of Posterior Mediastinal Mass (Posterior Mediastinal Tumour / Bronchogenic
                                    Cyst )
                                </li>
                                <li>
                                    Robotic Repair Of Morgagni Hernia
                                </li>
                                <li>
                                    Robotic Esophagectomy For Cancer/Other Diseases.
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default RoboticSurgeryPage;