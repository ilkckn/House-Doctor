import "./About.css";
import Philosophy from "./Philosophy";
import Team from "./Team";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="hero">
          <div className="content-l">
            <h1>Get to Know Us</h1>
            <p>
              Dr. Schmidt and his team dedicated to your health. We combine
              medical expertise with a personal touch.
            </p>
            <div className="btns">
              <button>Practice tour</button>
              <button>make contact</button>
            </div>
          </div>

          <div className="content-r">
            <img src="/about/hero.png" alt="" />
            <div className="tag">
              <span>Primary care</span>
              <span>Over 15 years</span>
              <span>Experience in the</span>
            </div>
          </div>
        </div>

        <div className="philosophy">
          <Philosophy />
        </div>

        <div className="team">
          <Team />
        </div>
      </div>
    </section>
  );
};

export default About;
