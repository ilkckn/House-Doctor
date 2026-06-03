import "./App.css";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Landing from "./pages/Landing/Landing";
import Services from "./pages/Services/Services";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="app">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
