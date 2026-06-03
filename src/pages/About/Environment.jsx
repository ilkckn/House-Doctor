import "./Environment.css";
import { FaWheelchair } from "react-icons/fa6";
import { FaBusAlt } from "react-icons/fa";
import { MdOutlineDone } from "react-icons/md";

const Environment = () => {
  return (
    <section className="environment">
      <div className="container">
        <div className="content-top">
          <div className="content-top-l">
            <div className="disabled-park">
              <div className="disabled">
                <img src="/about/team-disabled.png" alt="" />
                <div className="info">
                  <FaWheelchair />
                  <p>Accessible</p>
                  <p>Full access for wheelchairs and strollers.</p>
                </div>
              </div>
              <div className="park">
                <div className="info">
                  <FaBusAlt />
                  <p>Central location</p>
                  <p>
                    Right on the market square; parking available in the
                    courtyard.
                  </p>
                </div>
                <img src="/about/team-park.png" alt="" />
              </div>
            </div>
          </div>

          <div className="content-top-r">
            <div className="header">
              <p>The environment</p>
              <h1>Our Practice</h1>
              <p>
                We have designed our premises to ensure that you feel at ease
                right from the start. A welcoming atmosphere is just as
                important to us as state-of-the-art medical technology.
              </p>
            </div>
            <div className="environments">
              <div className="env">
                <MdOutlineDone />
                <div className="info">
                  <p>State of the-art ECG and ultrasound equipment</p>
                  <p>
                    Precise diagnostics directly on-site, without long waiting
                    times.
                  </p>
                </div>
              </div>
              <div className="env">
                <MdOutlineDone />
                <div className="info">
                  <p>Air conditioned rooms</p>
                  <p>A pleasant climate in every season for your well being.</p>
                </div>
              </div>
              <div className="env">
                <MdOutlineDone />
                <div className="info">
                  <p>Digital Patient Record</p>
                  <p>Efficient processes for rapid report transmission.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-bottom">
          <div className="next-appointment">
            <h1>Ready for your next Appointment?</h1>
            <p>
              We look forward to welcoming you in person at our practice. Book
              your appointment conveniently online now.
            </p>
            <div className="btns">
              <button>Book Online Now</button>
              <button>Inquire by phone</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Environment;
