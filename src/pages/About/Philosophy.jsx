import "./Philosophy.css";
import { MdGroups2 } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { RiMicroscopeLine } from "react-icons/ri";

const Philosophy = () => {
  return (
    <section className="philosophy">
      <div className="container">
        <div className="header">
          <span>Values & Vision</span>
          <h1>Our Philosophy</h1>
        </div>
        <div className="our-philosophy">
          <div className="box1-box2">
            <div className="box">
              <MdGroups2 />
              <h2>Patient centered care</h2>
              <p>
                At our practice, you as an individual take center stage. We take
                the time to address your concerns and work together with you to
                develop personalized treatment plans that fit seamlessly into
                your daily life.
              </p>
            </div>
            <div className="box">
              <FaRegHeart />
              <h2>Empathy</h2>
              <p>
                A listening ear and understanding of your concerns form the
                foundation of every successful treatment for us.
              </p>
            </div>
          </div>

          <div className="box3-box4">
            <div className="box">
              <RiMicroscopeLine />
              <h2>Modern Medicine</h2>
              <p>
                We utilize state of the-art diagnostic procedures and keep our
                knowledge at the forefront of scientific advancements through
                continuous professional development.
              </p>
            </div>
            <div className="box">
              <img src="/about/philosophy.png" alt="" />
              <p>"Health is a state of complete well being."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
