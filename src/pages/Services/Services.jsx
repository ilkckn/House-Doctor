import "./Services.css";
import { FiPhone } from "react-icons/fi";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { HiOutlineShieldCheck } from "react-icons/hi2";
import MedicalServices from "./MedicalServices";
import Questions from "./Questions";

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="hero">
          <div className="content-l">
            <div className="tag">
              <MdOutlineHealthAndSafety />
              <p id="par-tag">Your Partner for Health</p>
            </div>
            <div className="main-header">
              <h1>Comprehensive care for</h1>
              <h1>Your Health</h1>
            </div>
            <p>
              In our practice, we combine state of the-art medical standards
              with a trusting, personal atmosphere. Your health is our highest
              priority, and we provide you with expert guidance through every
              stage of life.
            </p>
            <div className="btns">
              <button>Schedule an appointment now</button>
              <button>
                <FiPhone className="icon" />
                <span>0170 123 4567</span>
              </button>
            </div>
          </div>

          <div className="content-r">
            <div className="image-wrapper">
              <img src="/services/hero.png" alt="" />
              <div className="certified-quality">
                <div className="icon">
                  <HiOutlineShieldCheck />
                </div>
                <div className="certified">
                  <p>Certified</p>
                  <span>Quality Management</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="medical-services-component">
          <MedicalServices />
        </div>

        <div className="questions-component">
          <Questions />
        </div>
      </div>
    </section>
  );
};

export default Services;
