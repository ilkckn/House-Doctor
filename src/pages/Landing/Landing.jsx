import "./Landing.css";
import { FiArrowRight, FiPhone } from "react-icons/fi";
import { HiOutlineUser } from "react-icons/hi2";
import { TbClockHour4 } from "react-icons/tb";
import OurServices from "./OurServices";

const Landing = () => {
  return (
    <section className="landing-container">
      <div className="container">
        <div className="hero">
          <div className="content-l">
            <div className="tag">
              <span></span>
              <p className="tag-p">Book appointments online now</p>
            </div>
            <div className="main-header">
              <h1>Your health</h1>
              <h1>in trustworthy Hands.</h1>
            </div>
            <p>
              Welcome to our modern family practice. We offer comprehensive
              medical care for the entire family, with a focus on preventive
              care, acute treatment, and chronic conditions.
            </p>
            <div className="btns">
              <button>
                online appointment <FiArrowRight className="icon" />
              </button>
              <button>
                <FiPhone className="icon" />
                <span>0170 123 4567</span>
              </button>
            </div>
            <div className="line"></div>
            <div className="specialists">
              <p className="specialist">
                <HiOutlineUser />
              </p>
              <p className="specialist">
                <HiOutlineUser />
              </p>
              <p className="specialist">+4</p>
              <p>
                A team of <span>6 specialists</span> is here for you.
              </p>
            </div>
          </div>
          <div className="content-r">
            <img src="/landing/hero.png" alt="" />
            <div className="open-hours">
              <div className="hours">
                <p>Open today</p>
                <span>08:00 - 18:00</span>
              </div>
              <div className="icon">
                <TbClockHour4 />
              </div>
            </div>
          </div>
        </div>

        <div className="our-services">
          <OurServices />
        </div>
      </div>
    </section>
  );
};

export default Landing;
