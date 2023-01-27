import { useContext, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { ThemeContext } from "./contexts/theme";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Upload from "./components/Upload/Upload";
import Autobidder from "./components/Autobidder/Autobidder";
import FreeTimeFinder from "./components/FreeTimeFinder/FreeTimeFinder";
import GroceryLister from "./components/GroceryLister/GroceryLister";
import Autocropper from "./components/Autocropper/Autocropper";
import "./App.css";
import ReactGA from "react-ga4";

const TRACKING_ID = "G-FW374BWK80"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);

  useEffect(() => {
    const path = window.location.pathname + window.location.search;
    ReactGA.send({ hitType: "pageview", page: path });
  }, []);

  return (
    <div id="top" className={`${themeName} app`}>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route index element={<HomePage />} /> */}
        {/* <Route path="/projects" element={<Projects />} /> */}
        <Route path="/autocropper" element={<Autocropper />} />

        <Route path="/groceries" element={<GroceryLister />} />

        {/* <Route path="/instagram" element={<Instagram />} /> */}
        <Route path="/freetimefinder" element={<FreeTimeFinder />} />
        <Route path="/autobidder" element={<Autobidder />} />
        <Route path="/fifa-autobidder" element={<Autobidder />} />

        {/* <Route path="/" element={<HomePage />} />
        <Route path="/autocropper" element={<Upload />} />
        <Route path="/fifa-autobidder" element={<Autobidder />} />
        <Route path="/free-time-finder-v2" element={<FreeTimeFinder />} /> */}
      </Routes>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default App;

function HomePage() {
  return (
    <>
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
