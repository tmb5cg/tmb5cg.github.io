import './App.scss';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect} from 'react'

import AppLayout from './components/layout/AppLayout';
import Blank from './pages/Blank';
import Upload from './pages/Upload';
import HomePage from './pages/HomePage';
import About from './pages/About';
import ReactGA from "react-ga4";

const TRACKING_ID = "G-HYHT5Q88L7"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {

    useEffect(() => {
        const path = window.location.pathname + window.location.search
        ReactGA.send({hitType: 'pageview', page: path})
      }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path='/upload' element={<Upload />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Blank />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;