import "./MedicalServices.css";
import { FaStethoscope } from "react-icons/fa6";
import {
  MdOutlineDone,
  MdOutlineVaccines,
  MdChevronRight,
} from "react-icons/md";
import { LuMicroscope } from "react-icons/lu";
import { RiTimerLine } from "react-icons/ri";
import { BsCameraVideo } from "react-icons/bs";

const MedicalServices = () => {
  return (
    <section className="medical-services">
      <div className="container">
        <div className="header">
          <h1>Our Medical Services</h1>
          <span></span>
        </div>

        <div className="services-boxes">
          <div className="box">
            <div className="icon">
              <FaStethoscope />
            </div>
            <h2>General & Internal Medicine</h2>
            <div className="service-check">
              <p>
                <MdOutlineDone />
                ECG / Stress ECG
              </p>
              <p>
                <MdOutlineDone />
                Lung function test
              </p>
              <p>
                <MdOutlineDone />
                Ultrasound examination
              </p>
              <p>
                <MdOutlineDone />
                24-Hour Blood Pressure Monitoring
              </p>
            </div>
          </div>

          <div className="box">
            <div className="icon">
              <LuMicroscope />
            </div>
            <h2>Laboratory & Diagnostics</h2>
            <p>
              Precise analyses for your safety. We perform blood tests, urine
              tests, and swabs directly on-site.
            </p>
            <p>
              <RiTimerLine />
              Same-day results
            </p>
          </div>

          <div className="box">
            <div className="icon">
              <MdOutlineVaccines />
            </div>
            <h2>Preventive Care & Vaccinations</h2>
            <p>
              Prevention is the best medicine. We offer check-ups, cancer
              screenings, and consultations on all standard vaccinations.
            </p>
            <p>
              Learn more
              <MdChevronRight />
            </p>
          </div>

          <div className="box">
            <div className="icon">
              <BsCameraVideo />
            </div>
            <h2>Video Consultation</h2>
            <p>
              Conveniently from the comfort of your home. Ideal for discussing
              results, follow-up appointments, or in cases of suspected
              infection.
            </p>
            <button>Request an appointment</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalServices;
