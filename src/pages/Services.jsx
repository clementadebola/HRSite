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

const ServicesSection = styled.section`
  padding: 4rem 2rem;
  background-color: #F5F5F5;
  text-align: center;
  h2 {
    color: #0A2540;
    margin-bottom: 2rem;
  }
`;

const ServiceGrid = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 2rem;
`;

const ServiceCard = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  h3 {
    margin-bottom: 1rem;
    color: #0A2540;
  }
  p {
    color: #333;
  }
`;
