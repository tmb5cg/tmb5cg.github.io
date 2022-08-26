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

// import { GoogleLogin } from 'react-google-login';
// import { gapi } from 'gapi-script';

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);

  // const clientId = '501334517326-6umils6sm37ai65fgh1v2r83s9ggefkg.apps.googleusercontent.com';

  // useEffect(() => {
  //   const initClient = () => {
  //         gapi.client.init({
  //         clientId: clientId,
  //         scope: ''
  //       });
  //     };
  //     gapi.load('client:auth2', initClient);
  // });

  // const onSuccess = (res) => {
  //   console.log('success:', res);
  // };
  // const onFailure = (err) => {
  //     console.log('failed:', err);
  // };

  return (

    <div id="top" className={`${themeName} app`}>
      <Header />

      {/* <GoogleLogin
          clientId={clientId}
          buttonText="Sign in with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
      /> */}

      <Routes>
        <Route path="/" element={ <HomePage />}  />

        <Route path="autocropper" element={<Upload />} />
        <Route path="fifa-autobidder" element={<Autobidder />} />
        <Route path="free-time-finder" element={<FreeTimeFinder />} />
        
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