import React from 'react'

const VatsSurgeryPage = () => {
    return (
        <>
            <section className="banner-area vats-surgery-bnnr" id="vats-bannr">
                <img src="assets/img/banner/vats-surgery.png" alt="vats-surgery" className="home-banner-web" />
                <img src="assets/img/banner/vats-surgery-mob.png" alt="vats-surgery" className="home-banner-mob" />
                <div className="bannr-cont">
                    <h3>Empowering Healing, Embracing Innovation:</h3>
                    <h2><span>VATS Surgery</span></h2>
                    <h3>Redefines Possibilities."</h3>
                    <p>
                        Explore how Vats Surgery revolutionizes thoracic care. Experience groundbreaking techniques from India's
                        top thoracoscopic surgeon. Redefine your healing journey.
                    </p>
                    </div>
            </section>
            <section className="vats-surgery-para" id="vats-robotic-cont">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="vat-head">
                                <h2>VATS Surgery</h2>
                            </div>
                            <h3>VATS (Key Hole Surgery) Program</h3>
                            <div className="thoracic-surgery">
                                <h3>What is VATS (Video Assisted Thoracic Surgery) ?</h3>
                                <p>Video-assisted thoracoscopic surgery (VATS) is a type of
                                    surgery
                                    for diagnosing and treating a variety of conditions involving
                                    the
                                    chest (thorax). It is a minimally invasive surgery where instead
                                    of
                                    conventional 15-20 cm cut on the chest, 3 smaller cuts each
                                    around
                                    1-4 cm are used to perform the complete surgery. The surgery is
                                    done
                                    using a special camera (called a thoracoscope) and other long
                                    slender tools through these cuts. The complete surgery performed
                                    as
                                    would be done in conventional open surgery but without the need
                                    of
                                    large incisions and any rib spreading.</p>
                            </div>

                            <div className="thoracic-surgery" id="thoracic-surgery-2">
                                <h3>Who requires VATS?</h3>
                                <p>VATS is employed to treat a variety of diseases of the chest
                                    that require surgery. These include diseases of the, Pleura,
                                    Lung,
                                    Esophagus, Mediastinum, Chest Wall and Diaphragm. Many a times
                                    VATS is used to biopsy part of the lung, the lymph nodes, the
                                    tissue around the lung, the tissue around the heart, or the
                                    esophagus for purpose of diagnosing certain diseases.</p>
                            </div>

                            <div className="niddle-n">
                                <img src="assets/img/post/niddle-scope.png" alt="niddle-scope"/>
                            </div>
                            <div className="risks-vats">
                                <h3>Risks of VATS</h3>
                                <h4>Any surgical procedure has some risks associated with it. VATS is no
                                    different. In experienced hands the incidence of these risks is
                                    reduced but is never zero. The possible complications of
                                    video-assisted thoracoscopic surgery (VATS) include:</h4>

                                <ul className="row row-cols-2 row-cols-sm-2 row-cols-md-2">
                                    <li>
                                        Air leak
                                    </li>
                                    <li>
                                        Partial collapsed lung (atelectasis)
                                    </li>
                                    <li>
                                        Abnormal heart rhythms
                                    </li>
                                    <li>
                                        Excess bleeding
                                    </li>
                                    <li>
                                        Pneumonia
                                    </li>

                                    <li>
                                        Collection
                                        of thick pus in the chest cavity (empyema)
                                    </li>

                                    <li>
                                        Wound infection

                                    </li>
                                    <li>Blood clot. This can lead to pulmonary embolism or stroke.</li>
                                    <li> Shock</li>
                                    <li> Complications
                                        from
                                        anaesthesia.</li>

                                </ul>

                                <p>The age of the patient, other coexisting medical conditions like
                                    diabetes, heart disease or other illnesses and the primary illness
                                    will help determine your risk for different complications. Please do
                                    not hesitate to ask your surgeon about your specific risks. <span>An
                                        experienced team will take measures to reduce these complications by
                                        proper preoperative evaluation and optimization, immaculate surgical
                                        technique and aggressive post-operative monitoring and
                                        care.</span></p>
                            </div>

                            {/* <!-- <div className="vats-advac-surg">
                        <h3>List of Procedures done by VATS</h3>
                        <ul>
                            <li>VATS Drainage of infected Pleural Effusion (Early Stage
                                Empyema)</li>
                            <li>VATS Decortication for Empyema Thoracic (Late Stage
                                Empyema)</li>
                            <li>VATS Lobectomy (For Lung Cancer, Bronchiectasis,
                                Aspergilloma, Lung Cysts etc)</li>
                            <li>VATS Segmentectomy</li>
                            <li>VATS resection of lung nodules (Metastasectomy, Solitary
                                Pulmonary Nodule)</li>
                            <li>VATS Pleurodesis (for Recurrent Pleural Effusion /
                                Pneumothorax)</li>
                            <li>VATS for Pneumothorax (Primary or Secondary)</li>
                            <li>VATS Thymectomy for Myasthenia Gravis and / or Thymoma</li>
                            <li>VATS resection of Posterior Mediastinal Tumours</li>
                            <li>VATS Resection of Cysts of lung / Mediastinum (Hydatid
                                cysts, Bronchogenic Cysts, Esophageal Duplication Cysts)</li>
                            <li>VATS lung Biopsy for Interstitial Lung Disease</li>
                            <li>VATS enucleation of Esophageal Leiomyoma</li>
                            <li>VATS Esophagectomy for Esophageal Cancer</li>
                        </ul>
                    </div> --> */}
                        </div>
                        <div className="col-lg-3">
                            <div className="form-bg-n">
                                <h4 className="sub-heading-n">Get In Touch</h4>
                                <p>We are here for you! How can we help?</p>
                                <form action method className="consultation-form">
                                    <div className="form-group">
                                        <label for="name">Your name</label>
                                        <input className="form-control" name="name" id="name" placeholder="Please enter your name" type="text" />
                                    </div>
                                    <div className="form-group">
                                        <label for="email">Email</label>
                                        <input className="form-control" name="email" id="email" placeholder="Please enter your email" type="email" />
                                    </div>
                                    <div className="form-group">
                                        <label for="subject">Subject</label>
                                        <input className="form-control" name="subject" id="subject" placeholder="Just saying hi" type="text" />
                                    </div>

                                    <div className="form-group" id="topup-icon">
                                        <select className="form-control" name="option" id="option">
                                            <option value disabled selected hidden>Enter Your Visited Us
                                                Before?</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            <option value="option1">Option 3</option>
                                            <option value="option2">Option 4</option>
                                        </select>
                                        <img src="assets/img/icons/top-bottom.png" alt="top-bottom" />
                                    </div>

                                    <div className="form-group">
                                        <label for="message">Message</label>
                                        <textarea className="form-control" name="message" id="message"
                                            placeholder="Enter your message here"></textarea>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center h-bannr-btn" id="send-btn">
                                        <button className="btn btn-primary">Send
                                            <span><img src="assets/img/icons/btn-arrow.png" alt="btn-arrow" /></span>
                                        </button>
                                    </div>
                                </form>
                            </div>

                            <div className="belal-back-content">
                                <div className="belal-dr">
                                    <img src="assets/img/post/dr.belal.png" alt="dr.belal" />
                                </div>
                                <div className="belal-content">
                                    <h5>Dr Belal Bin Asaf</h5>
                                    <p>Associate Director</p>
                                    <p>Institute Of Chest Surgery, Chest</p>
                                    <p> Onco-Surgery & Lung Transplantation </p>
                                    <p>Medanta, Sector 38, Gurugram</p>
                                    <div className="h-bannr-btn" id="app-btn">
                                        <button className="btn btn-primary">Appointment</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container benefits-vats-advac-surg">
                <div className="row gy-3">
                    <div className="col-lg-8">
                        <div className="vats-advac-surg">
                            <h3>List of Procedures done by VATS</h3>
                            <ul>
                                <li>VATS Drainage of infected Pleural Effusion (Early Stage
                                    Empyema)</li>
                                <li>VATS Decortication for Empyema Thoracic (Late Stage
                                    Empyema)</li>
                                <li>VATS Lobectomy (For Lung Cancer, Bronchiectasis,
                                    Aspergilloma, Lung Cysts etc)</li>
                                <li>VATS Segmentectomy</li>
                                <li>VATS resection of lung nodules (Metastasectomy, Solitary
                                    Pulmonary Nodule)</li>
                                <li>VATS Pleurodesis (for Recurrent Pleural Effusion /
                                    Pneumothorax)</li>
                                <li>VATS for Pneumothorax (Primary or Secondary)</li>
                                <li>VATS Thymectomy for Myasthenia Gravis and / or Thymoma</li>
                                <li>VATS resection of Posterior Mediastinal Tumours</li>
                                <li>VATS Resection of Cysts of lung / Mediastinum (Hydatid
                                    cysts, Bronchogenic Cysts, Esophageal Duplication Cysts)</li>
                                <li>VATS lung Biopsy for Interstitial Lung Disease</li>
                                <li>VATS enucleation of Esophageal Leiomyoma</li>
                                <li>VATS Esophagectomy for Esophageal Cancer</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="vats-advac-surgging">
                            <h3>Benefits of VATS</h3>
                            <h4>VATS has shown several benefits when compared to
                                conventional open surgery</h4>
                            <ul>
                                <li>
                                    Less Pain
                                </li>
                                <li>
                                    Less Blood Loss
                                </li>
                                <li>
                                    Shorter Hospital Stay
                                </li>
                                <li>
                                    Better
                                    Cosmesis
                                </li>
                                <li>
                                    Earlier Return to work
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VatsSurgeryPage;