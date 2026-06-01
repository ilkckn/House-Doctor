import "./App.css";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Landing from "./pages/Landing/Landing";
import Services from "./pages/Services/Services";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="app">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
