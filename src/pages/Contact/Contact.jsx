import "./Contact.css";
import Form from "./Form";
import { BsTelephone } from "react-icons/bs";
import {
  IoMailOutline,
  IoLocationOutline,
  IoInformationCircleOutline,
} from "react-icons/io5";
import { TbClockHour5 } from "react-icons/tb";
import Map from "../../components/Map/Map";

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <div className="hero">
          <img src="/contact/hero.png" alt="" />
          <div className="header">
            <h1>We are here for you.</h1>
            <p>
              Do you have any questions or would you like to schedule an
              appointment? We look forward to hearing from you.
            </p>
          </div>
        </div>
        <div className="form-communications-opening">
          <Form />
          <div className="communications-opening">
            <div className="communications">
              <h2>Our Contact Details</h2>
              <div className="phone">
                <BsTelephone />
                <div className="info">
                  <p>Telephone</p>
                  <p>0170 123 4567</p>
                </div>
              </div>
              <div className="email">
                <IoMailOutline />
                <div className="info">
                  <p>E-mail</p>
                  <p>info@housedoctor-schmidt.de</p>
                </div>
              </div>
              <div className="location">
                <IoLocationOutline />
                <div className="info">
                  <p>Address</p>
                  <p>Marktplatz 1, 12345 Mustesstadt</p>
                </div>
              </div>
            </div>
            <div className="opening">
              <div className="header">
                <TbClockHour5 />
                <h2>Office Hours</h2>
              </div>
              <div className="hours">
                <div className="mon-fr">
                  <p>Mo-Fr</p>
                  <p>08:00 - 12:00</p>
                </div>
                <div className="mon-di-do">
                  <p>Mo,Di,Do</p>
                  <p>15:00 - 18:00</p>
                </div>
                <div className="mit">
                  <p>Wednesday afternoon</p>
                  <p>Close</p>
                </div>
              </div>
              <div className="emergencies">
                <IoInformationCircleOutline />
                <p>
                  For emergencies outside of office hours, please dial the
                  emergency service at 116 117.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="map">
          <Map />
        </div>
      </div>
    </section>
  );
};

export default Contact;
