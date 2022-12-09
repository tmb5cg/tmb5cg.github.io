import { useContext, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { ThemeContext } from "./contexts/theme";
import Header from "./components/Header/Header";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Footer from "./components/Footer/Footer";
import Autobidder from "./components/Autobidder/Autobidder";
import FreeTimeFinder from "./components/FreeTimeFinder/FreeTimeFinder";
import Instagram from "./components/Instagram/Instagram";
import Home from "./components/Home/Home";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Autocropper from "./components/Autocropper/Autocropper";
import Projects from "./components/Projects/Projects";
import GroceryLister from "./components/GroceryLister/GroceryLister";
import Skills from "./components/Skills/Skills";

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);

  return (
    <div>
      <Sidebar />
      {/* <Header /> */}
      <Outlet />
      {/* no idea what Outlet does and everything works without it */}

      <div
        id="top"
        style={{ padding: "50px 50px 10px 370px" }}
        className={`${themeName} app`}
      >
        <Routes>
          <Route path="/" element={<AppLayout />} />
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/autocropper" element={<Autocropper />} />
          <Route path="/groceries" element={<GroceryLister />} />
          <Route path="/instagram" element={<Instagram />} />
          <Route path="/freetimefinder" element={<FreeTimeFinder />} />
          <Route path="/autobidder" element={<Autobidder />} />
          <Route path="/fifa-autobidder" element={<Autobidder />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>

        <ScrollToTop />
        <Footer />
      </div>
    </div>
  );
};

export default App;
