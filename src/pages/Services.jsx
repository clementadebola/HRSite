import React from 'react';
import styled from 'styled-components';

const Services = () => {
  return (
    <ServicesSection>
      <h2>Our Services</h2>
      <ServiceGrid>
        <ServiceCard>
          <h3>Recruitment</h3>
          <p>Providing top-notch recruitment services to help you find the best talent.</p>
        </ServiceCard>
        <ServiceCard>
          <h3>Training & Development</h3>
          <p>Enhancing employee skills through tailored training programs.</p>
        </ServiceCard>
        <ServiceCard>
          <h3>Employee Management</h3>
          <p>Streamlining HR processes for better employee engagement and productivity.</p>
        </ServiceCard>
      </ServiceGrid>
    </ServicesSection>
  );
};

export default Services;

// Styled Components
const ServicesSection = styled.section`
  padding: 4rem 1rem;
  background-color: #F5F5F5;
  text-align: center;

  h2 {
    color: #0A2540;
    margin-bottom: 3rem;
    font-size: 2rem;
  }
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  justify-content: center;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ServiceCard = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: left;
  max-width: 100%;
  margin: 0 auto;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    margin-bottom: 1rem;
    color: #0A2540;
    font-size: 1.5rem;
  }

  p {
    color: #333;
    font-size: 1rem;
    line-height: 1.6;
  }
`;
