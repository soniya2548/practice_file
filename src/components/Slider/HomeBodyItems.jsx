import React from "react";

const HomeBodyItems = () => {

 
  // dynamic li list

  const listData = [
    {
      id : 1,
      title : "Society of Thoracic Surgeons (STS, USA)"
    },
    {
      id : 2,
      title : "The European Society of Thoracic Surgeons (ESTS)"
    },
    {
      id : 3,
      title : "Association of Surgeons of India (ASI)"
    },
    {
      id : 4,
      title : "Society of Endoscopic and Laparoscopic Surgeon of India (SELSI)"
    },
    {
      id : 5,
      title : " The International Association for the Study of Lung Cancer (IASLC) and many more."
    },
  ]


  const EducationItem = [

    {
      id : 1,
      title : "Over 20 years of experience in thoracic surgery.",
    },
    {
      id : 1,
      title : "Performed over 4000 minimally invasive chest surgeries.",
    },
    {
      id : 1,
      title : "Pioneer of robotic thoracic surgery in India.",
    },
    {
      id : 1,
      title : "Expertise in treating both benign and malignant conditions of the chest.",
    },
    {
      id : 1,
      title : " Dedicated to using advanced surgical techniques for optimal patient outcomes.",
    },
    {
      id : 1,
      title : "Comprehensive, patient-centered care approach.",
    },
    {
      id : 1,
      title : "Renowned for precision, innovation, and compassionate care.",
    },

  
  ]

  return (
    <>
      <section className="best-surgeon">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="surgeon-img">
                <img
                  className="animate__flipOutY"
                  src="assets/img/post/belal-img.png"
                  alt="belal-img"
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="surgeon-section">
                <h2>Best Thoracic Surgeon In India</h2>
                <h3 className="mt-4">Dr. Belal Bin Asaf</h3>
                <h4>THORACIC, THORACOSCOPIC & ROBOTIC SURGEON</h4>
                <p>
                  Dr Belal Bin Asaf is a renowned Thoracic (Chest) Surgeon and
                  is the Associate Director of the Institute of Chest Surgery,
                  Chest Onco-Surgery & Lung Transplantation at the Medanta - The
                  Medidcity, Gurugram, Haryana. The institute is the largest
                  volume{" "}
                  <a href="introduction-and-experience.html">Read more</a>
                </p>
                <div className="education-experience mt-2 ">
                  <h4>Highlights of Dr. Belal Bin Asaf's Expertise</h4>
                  <ul>
              {EducationItem.map((item) => (
                <li>{item?.title}</li>
              ))}
                  </ul>
                </div>
                {/* <!-- <div className="h-bannr-btn mt-2 ">
                                    <button className="btn btn-primary">View More
                                        <span><img src="assets/img/icons/btn-arrow.png" alt /></span>
                                    </button>
                                </div> --> */}
              </div>
            </div>
          </div>
        </div>
        <span className="shape-stethoscope">
          <img src="assets/img/shape/stethoscope.png" alt="stethoscope" />
        </span>
      </section>

      <section className="introdu-belal">
        <div className="container">
          <div className="row justify-content-between align-items-center intro-belal-flex">
            <div className="col-md-8">
              <div className="intro-cont">
                <h2>Introduction - Dr. Belal Bin Asaf</h2>
                <h4>Expert Thoracic Surgeon</h4>
                <p>
                  Welcome to the official website of Dr Belal Bin Asaf, a
                  leading thoracic surgeon specialising in advanced thoracic
                  surgeries for lung cancer, mediastinal tumours, thymectomy,
                  empyema thoracis, hemoptysis, pneumothorax, tracheal stenosis
                  and endobronchial tumours (e.g. carcinoid) and other
                  non-cardiac chest conditions.
                </p>
                <p>
                  {" "}
                  With over 20 years of experience and a reputation for surgical
                  excellence, Dr Belal Bin Asaf is dedicated to providing
                  state-of-the-art, minimally invasive treatments to patients in
                  need of expert thoracic care.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="intro-post text-md-end text-sm-center">
                <img
                  src="assets/img/post/intro-belal-post.png"
                  alt="intro-belal-post"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="counter-sec">
        <div className="main-counter2">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2">
              <div className="col">
                <div className="counter-cont">
                  <div className="count-head">
                    <h2>Why Choose Dr. Belal Bin Asaf?</h2>
                    <p>
                      Dr. Belal Bin Asaf has performed over 4000 minimally
                      invasive chest surgeries, making him one of the most
                      experienced thoracic surgeons in India. As a pioneer in
                      robotic thoracic surgery, he utilizes cutting-edge
                      technology to ensure precise, effective & less invasive
                      procedures, resulting in faster recovery times and better
                      outcomes for patients.
                    </p>
                  </div>
                  <ul className="row row-cols-2 row-cols-sm-2 row-cols-md-2 gy-5">
                    <li>
                      <div className="count-value d-flex align-items-center">
                        <div className="d-flex  align-items-center">
                          <div
                            className="counting"
                            data-count="6000"
                            data-speed="1000"
                          >
                            0
                          </div>
                          <div className="operator">+</div>
                        </div>
                        <span>Satisfied Patients</span>
                      </div>
                    </li>
                    <li>
                      <div className="count-value d-flex align-items-center">
                        <div className="d-flex  align-items-center">
                          <div
                            className="counting"
                            data-count="15"
                            data-speed="1000"
                          >
                            0
                          </div>
                          <div className="operator">+</div>
                        </div>
                        <span>Years of Surgical Experience</span>
                      </div>
                    </li>
                    <li>
                      <div className="count-value d-flex align-items-center">
                        <div className="d-flex  align-items-center">
                          <div
                            className="counting"
                            data-count="2000"
                            data-speed="1000"
                          >
                            0
                          </div>
                          <div className="operator">+</div>
                        </div>
                        <span>Vats Surgery</span>
                      </div>
                    </li>
                    <li>
                      <div className="count-value d-flex align-items-center">
                        <div className="d-flex  align-items-center">
                          <div
                            className="counting"
                            data-count="500"
                            data-speed="1000"
                          >
                            0
                          </div>
                          <div className="operator">+</div>
                        </div>
                        <span>Robotic Chest Surgery</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col">
                <div className="count-img-sec">
                  <img
                    src="assets/img/post/counter-sec-post.png"
                    alt="counter-sec-post"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="surgical-service">
        <div className="container">
          <div className="surgical-cont">
            <div className="surgical-head">
              <h2>Comprehensive Thoracic Surgical Services</h2>
              <p>
                At The Institute of Chest Surgery, Chest Onco-Surgery & Lung
                Transplantation Dr. Belal Bin Asaf offers a full range of
                thoracic surgical services, including but not limited to:
              </p>
            </div>
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 gy-4">
              <div className="col">
                <div className="surgical-list surgi-list-border">
                  <div className="surg-list-icon">
                    <img
                      src="assets/img/icons/surgical-icon-1.png"
                      alt="surgical-icon-1"
                    />
                  </div>
                  <h5>Lung Cancer Surgery</h5>
                  <p>
                    Expert surgical treatment for various types of lung cancer,
                    utilizing the latest techniques to improve patient outcomes.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="surgical-list surgi-list-border">
                  <div className="surg-list-icon">
                    <img
                      src="assets/img/icons/surgical-icon-2.png"
                      alt="surgical-icon-2"
                    />
                  </div>
                  <h5>Mediastinal Tumor Removal</h5>
                  <p>
                    Specialized in the diagnosis and surgical management of
                    tumors located in the mediastinum.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="surgical-list">
                  <div className="surg-list-icon">
                    <img
                      src="assets/img/icons/surgical-icon-3.png"
                      alt="surgical-icon-3"
                    />
                  </div>
                  <h5>Thymectomy</h5>
                  <p>
                    Advanced surgical procedures for the removal of the thymus
                    gland, often indicated in cases of myasthenia gravis &
                    thymoma.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="surgical-list surgi-list-border">
                  <div className="surg-list-icon">
                    <img
                      src="assets/img/icons/surgical-icon-4.png"
                      alt="surgical-icon-4"
                    />
                  </div>
                  <h5>
                    Surgery for Tracheal Tumours / Tracheal Stenosis (Narrowing)
                  </h5>
                  {/* <!-- <p>
                                        Expert surgical treatment for various types of lung cancer, utilizing the latest techniques to improve
                                        patient outcomes.
                                    </p> --> */}
                </div>
              </div>
              <div className="col">
                <div className="surgical-list surgi-list-border">
                  <div className="surg-list-icon">
                    <img
                      src="assets/img/icons/surgical-icon-5.png"
                      alt="surgical-icon-5"
                    />
                  </div>
                  <h5>Empyema Thoracic Treatment</h5>
                  <p>
                    Comprehensive management and surgical intervention for
                    pleural empyema, ensuring effective resolution of the
                    infection.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="surgical-list">
                  <div className="surg-list-icon">
                    <img
                      src="assets/img/icons/surgical-icon-6.png"
                      alt="surgical-icon-6"
                    />
                  </div>
                  <h5>Hemoptysis Management</h5>
                  <p>
                    Expertise in addressing and surgically managing cases of
                    hemoptysis (coughing up blood).
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="surgical-list surgi-list-border">
                  <div className="surg-list-icon">
                    <img
                      src="assets/img/icons/surgical-icon-7.png"
                      alt="surgical-icon-7"
                    />
                  </div>
                  <h5>Pneumothorax Surgery</h5>
                  <p>
                    Minimally invasive surgical options for treating
                    pneumothorax, aimed at preventing recurrence & improving
                    lung function.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="surgical-list surgi-list-border">
                  <div className="surg-list-icon">
                    <img
                      src="assets/img/icons/surgical-icon-8.png"
                      alt="surgical-icon-8"
                    />
                  </div>
                  <h5>Other Non-Cardiac Chest Surgeries</h5>
                  <p>
                    Expert surgical treatment for various types of lung cancer,
                    utilizing the latest techniques to improve patient outcomes.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="surgical-list">
                  <div className="surg-list-icon">
                    <img
                      src="assets/img/icons/surgical-icon-9.png"
                      alt="surgical-icon-9"
                    />
                  </div>
                  <h5>Lung Transplantation</h5>
                  <p>
                    A life-saving surgical procedure for patients with end-stage
                    lung disease, offering the potential for significantly
                    improved breathing & quality of life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="commit-ex">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2">
            <div className="col"></div>
            <div className="col">
              <div className="commit-exc-cont">
                <h3>Commitment to Excellence</h3>
                <p>
                  Dr. Belal Bin Asaf is committed to delivering the highest
                  standard of care, utilizing the latest advancements in
                  thoracic surgery to achieve optimal patient results. With a
                  patient-centred approach, Dr. Belal Bin Asaf ensures
                  personalised treatment plans tailored to meet the unique needs
                  of each individual.
                </p>
                <p>
                  If you are seeking expert thoracic surgical care for Lung
                  Cancer, Mediastinal Tumours, Thymectomy, Tracheal Surgery,
                  Empyema Thoracis, Hemoptysis, Pneumothorax, or other
                  non-cardiac chest conditions, trust Dr. Belal Bin Asaf for
                  exceptional outcomes and compassionate care. Contact us today
                  to +91 - 9818045855
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="award-rec">
        <div className="container">
          <div className="award-section">
            <div class>
              <h2>Awards and Recognitions:</h2>
              <h4>
                Dr. Belal Bin Asaf is a Member of Several Professional
                Societies, Including:
              </h4>
              <ul>
                {listData.map((item) => (
                <li>{item?.title}</li>
              ))}
              </ul>
            </div>
            <div className="h-bannr-btn mt-2 ">
              <a
                href="awards-and-recognitions.html"
                className="btn btn-primary"
              >
                View More
                <span>
                  <img src="assets/img/icons/btn-arrow.png" alt="btn-arrow" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeBodyItems;
