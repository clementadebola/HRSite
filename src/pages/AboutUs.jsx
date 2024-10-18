import React from 'react';
import styled from 'styled-components';
import img from '../assets/perss.jpg';

const AboutUs = () => {
  return (
    <Container>
      <ContentWrapper>
        <ImageSection>
          <StyledImage src={img} alt="Team Meeting" />
        </ImageSection>
        
        <ContentSection>
          <AboutBox>
            <h2>About Us</h2>
            <p>
              We are a dedicated HR firm focused on providing excellent workforce solutions. 
              Our mission is to empower businesses by streamlining their HR processes, 
              and our vision is to become the leading HR services provider globally.
            </p>
            <Button>See More</Button>
          </AboutBox>

          <StatsWrapper>
            <StatBox>
              <StatNumber>25+</StatNumber>
              <StatText>Years of Experience</StatText>
            </StatBox>
            <StatBox>
              <StatNumber>10K</StatNumber>
              <StatText>Collaborated Companies</StatText>
            </StatBox>
            <StatBox>
              <StatNumber>50</StatNumber>
              <StatText>New Jobs Per Day</StatText>
            </StatBox>
          </StatsWrapper>
        </ContentSection>
      </ContentWrapper>
    </Container>
  );
};

export default AboutUs;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  // gap: 1rem;
  // display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ImageSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  object-fit: cover;
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const AboutBox = styled.div`
  background: linear-gradient(180deg, #fff 0%, #e0e4fd 100%);
  padding: 2.5rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  h2 {
    color: #0A2540;
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  p {
    color: #333;
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 2rem;
    
    h2 {
      font-size: 1.75rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

const Button = styled.button`
  background-color: #FF914D;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #FF7300;
  }
`;

const StatsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const StatBox = styled.div`
  text-align: center;
  padding: 1rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`;

const StatNumber = styled.h3`
  color: #0A2540;
  font-size: 1.75rem;
  font-weight: bold;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const StatText = styled.p`
  color: #333;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;