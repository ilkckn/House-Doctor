import "./Questions.css";
import { IoCalendarClearOutline } from "react-icons/io5";
import { TbPhoneCall } from "react-icons/tb";

const Questions = () => {
  return (
    <section className="questions">
      <div className="container">
        <h1>
          Do you have any questions, or would you like to make an appointment?
        </h1>
        <p>
          Our team is happy to assist you during our office hours. Book your
          appointment conveniently online or give us a call.
        </p>
        <div className="btns">
          <button>
            <IoCalendarClearOutline />
            Book an Appointment
          </button>
          <button>
            <TbPhoneCall />
            0170 123 4567
          </button>
        </div>
      </div>
    </section>
  );
};

export default Questions;
