import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import AboutUs from './AboutUs';
import MissionVisionPage from './MissionVisionPage';
import Services from './Services';
import Footer from './Footer';
import styled from 'styled-components';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Section id="aboutus">
        <AboutUs />
      </Section>
      <Section id="missionVisionPage">
        <MissionVisionPage/>
      </Section>
      <Section id="services">
        <Services />
      </Section>
      <Footer />
    </div>
  );
};

export default HomePage;

const Section = styled.section`
  scroll-margin-top: 80px; /* Offset for sticky navbar */
`;
