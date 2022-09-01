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
import "./App.css";


const App = () => {
  const [{ themeName }] = useContext(ThemeContext);

  return (

    <div id="top" className={`${themeName} app`}>
      <Header />

      <Routes>
        <Route path="/" element={ <HomePage />}  />

        <Route path="/autocropper" element={<Upload />} />
        <Route path="/fifa-autobidder" element={<Autobidder />} />
        <Route path="/free-time-finder-v2" element={<FreeTimeFinder />} />
        
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
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}