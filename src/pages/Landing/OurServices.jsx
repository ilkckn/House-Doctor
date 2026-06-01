import "./OurServices.css";
import { FaStethoscope } from "react-icons/fa6";
import { MdOutlineDone } from "react-icons/md";
import { MdOutlineVaccines, MdOutlineHealthAndSafety } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";

const OurServices = () => {
  return (
    <section className="our-services-container">
      <div className="container">
        <div className="header">
          <h1>Our Services</h1>
          <p>
            Comprehensive primary care at the cutting edge of medical science.
          </p>
        </div>

        <div className="services-boxes">
          <div className="box1-box2">
            <div className="box1">
              <p className="icon">
                <FaStethoscope />
              </p>
              <h2>General Practice & Internal Medicine</h2>
              <p>
                From treating acute infections to managing chronic conditions
                such as high blood pressure or diabetes we are your first point
                of contact for all health-related questions.
              </p>
              <div className="practice-and-medicines">
                <p>
                  <MdOutlineDone className="done" /> ECG & Stress ECG
                </p>
                <p>
                  <MdOutlineDone className="done" /> Lung function test
                </p>
                <p>
                  <MdOutlineDone className="done" /> Ultrasound Examinations
                </p>
              </div>
            </div>

            <div className="box2">
              <div className="icon2">
                <MdOutlineVaccines />
              </div>
              <h2>Laboratory & Diagnostics</h2>
              <p>
                Daily blood draws and rapid tests in our in-house laboratory.
              </p>
              <p id="learn-more">
                learn more <FiArrowRight />
              </p>
            </div>
          </div>

          <div className="box3-box4">
            <div className="box3">
              <div className="icon3">
                <MdOutlineHealthAndSafety />
              </div>
              <h2>Preventive Care & Vaccinations</h2>
              <p>
                Check-up 35, skin cancer screening, cancer prevention, and
                travel vaccination advice.
              </p>
              <p id="learn-more">
                learn more <FiArrowRight />
              </p>
            </div>

            <div className="box4">
              <h2>Video Consultation</h2>
              <div className="par-btn">
                <p>
                  For quick inquiries, discussions of test results, or
                  certificates of incapacity for work, we also offer convenient
                  online appointments.
                </p>
                <button>Book an appointment</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
