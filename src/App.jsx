import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GlobalStyles from './styles/Globalstyles';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
