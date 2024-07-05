import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AOS from 'aos';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavbarSec, SidebarSec, FooterSec } from './Sections';
import { DTitle, ScrollToTop, ToTopBtn, WebRoutes } from './Components';
import './App.css';

const App = () => {
  useEffect(() => {
    AOS.init({
        duration: 1200,
    });
  }, []);

  return (
    <Router>
        <DTitle />
        <div className="App">
          <NavbarSec />
          <SidebarSec />
          <WebRoutes />
          <FooterSec />
          <ToTopBtn />
        </div>      
        <ScrollToTop />
    </Router>
  );
}

export default App;

