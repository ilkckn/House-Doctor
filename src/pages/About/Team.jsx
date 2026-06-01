import "./Team.css";
import { MdGroups } from "react-icons/md";

const Team = () => {
  return (
    <section className="team">
      <div className="container">
        <div className="header">
          <p>competence</p>
          <h2>our team</h2>
          <p>
            Get to know the people who passionately look after your health every
            day.
          </p>
        </div>
        <div className="doctor-assistants">
          <div className="doctor">
            <div className="image">
              <img src="/services/hero.png" alt="" />
            </div>
            <div className="info">
              <h2 className="name">Dr.Med.Thomas Schmidt</h2>
              <p className="specialist">Specialist in General Medicine</p>
              <p className="text">
                With a focus on holistic medicine and prevention, Dr. Schmidt
                has led the practice since 2012.
              </p>
            </div>
          </div>
          <div className="assistants-explanation">
            <div className="assistants">
              <div className="box">
                <img src="/about/team-women.png" alt="" />
                <h1>Sabine Weber</h1>
                <p>Lead Medical Assistant</p>
                <p>
                  Expert in Practice Management and your first point of contact
                  for all organizational questions.
                </p>
              </div>
              <div className="box">
                <img src="/about/team-man.png" alt="" />
                <h1>Lucas Müller</h1>
                <p>Medical Assistant</p>
                <p>
                  Specializing in blood draws and technical examinations, with
                  exceptional patience.
                </p>
              </div>
              <div className="box">
                <MdGroups />
                <p>
                  Our team is strengthened by two additional dedicated female
                  employees and rotating interns.
                </p>
              </div>
            </div>
            <div className="explanation"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
