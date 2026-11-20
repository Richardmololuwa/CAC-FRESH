import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Pastor from "./pages/Pastor.jsx";
import Services from "./pages/Services.jsx";
import Ministries from "./pages/Ministries.jsx";
import Gallery from "./pages/Gallery.jsx";
import Videos from "./pages/Videos.jsx";
import Contact from "./pages/Contact.jsx";
import UpcomingEvents from "./pages/UpcomingEvents.jsx";
import ChurchStructuredData from "./components/ChurchStructuredData.jsx";


function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ChurchStructuredData />
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pastor" element={<Pastor />} />
          <Route path="/upcoming-events" element={<UpcomingEvents />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/ministries" element={<Ministries />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
