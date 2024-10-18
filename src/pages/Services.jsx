import React from 'react';
import styled from 'styled-components';
import recuitmentImg from '../assets/recuitment.png';
import trainingImg from '../assets/training.png';
import employeeImg from "../assets/employee.png";

const Services = () => {
  return (
    <ServicesSection>
      <h2>Our Services</h2>
      <ServiceGrid>
        <ServiceCard>
          <CardContent>
            <div>
              <h3>Recruitment</h3>
              <p>Providing top-notch recruitment services to help you find the best talent.</p>
            </div>
            <img src={recuitmentImg} alt="Recruitment Service" />
          </CardContent>
        </ServiceCard>
        <ServiceCard>
          <CardContent>
            <div>
              <h3>Training & Development</h3>
              <p>Enhancing employee skills through tailored training programs.</p>
            </div>
            <img src={trainingImg} alt="Training Service" />
          </CardContent>
        </ServiceCard>
        <ServiceCard>
          <CardContent>
            <div>
              <h3>Employee Management</h3>
              <p>Streamlining HR processes for better employee engagement and productivity.</p>
            </div>
            <img src={employeeImg} alt="Employee Management Service" />
          </CardContent>
        </ServiceCard>
      </ServiceGrid>
    </ServicesSection>
  );
};

export default Services;

// Styled Components
const ServicesSection = styled.section`
  padding: 4rem 1rem;
  background-color: #F2F3F7FF;
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

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 300px;
  border-radius: 25px;

  img {
    max-width: 150px;
    margin-top: 1.5rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    text-align: left;

    img {
      margin-left: 1.5rem;
      margin-top: 0;
    }
  }
`;
