import React from "react";
import { useContext, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/theme";
import Header from "../Header/Header";
import AppLayout from "../layout/AppLayout";
import Footer from "../Footer/Footer";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import Skills from "../Skills/Skills";
import Instagram from "../Instagram/Instagram.js";
// import App from "../../App.css";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <>
      <main>
        <About />
        {/* <Projects /> */}
        <Skills />
        <Contact />
      </main>
    </>
  );
};

export default Home;
