import "./Navbar.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = (e) => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
    e.stopPropagation();
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div
        className={`menu-overlay ${isMenuOpen ? "visible" : ""}`}
        onClick={closeMenu}
      ></div>
      <section className="navbar">
        <div className="container">
          <div className="logo">
            <img src="/logo/logo-1.png" alt="" />
            <p>House Doc. Dr. Med. Schmidt</p>
          </div>
          <div className="links">
            <ul>
              <li>
                <NavLink to="/">Landing</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="menuIcon-appointmentButton">
            <TiThMenu className="menuIcon" onClick={toggleMenuOpen} />
            <button className="appointment-btn">Book an appointment</button>
          </div>

          {/* Mobile Menu */}
          <div className="mobile-menu-container">
            {isMenuOpen && (
              <div className="mobile-menu">
                <div className="logo">
                  <img src="/logo/logo-1.png" alt="" />
                  <p>House Doc. Dr. Med. Schmidt</p>
                </div>
                <div className="links">
                  <ul>
                    <li>
                      <NavLink to="/" onClick={closeMenu}>
                        Landing
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/services" onClick={closeMenu}>
                        Services
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/about" onClick={closeMenu}>
                        About
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact" onClick={closeMenu}>
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                  <div className="mobile-appointment">
                    <button className="appointment-btn">
                      Book an appointment
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
