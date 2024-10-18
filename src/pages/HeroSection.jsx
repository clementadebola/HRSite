import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import img from '../assets/hr.png';

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroOverlay />
      <ContentWrapper>
        <LeftContent>
          <MainHeading>
            Transform Your <HighlightText>Workforce</HighlightText> Management
          </MainHeading>
          <SubHeading>
            Empowering businesses with innovative HR solutions that drive success and growth
          </SubHeading>
          <ButtonGroup>
            <PrimaryButton to="/services">Explore Services</PrimaryButton>
            <SecondaryButton to="/contact">Get Started</SecondaryButton>
          </ButtonGroup>
          <Statistics>
            <StatItem>
              <StatNumber>98%</StatNumber>
              <StatLabel>Client Satisfaction</StatLabel>
            </StatItem>
            <StatDivider />
            <StatItem>
              <StatNumber>500+</StatNumber>
              <StatLabel>Companies Served</StatLabel>
            </StatItem>
            <StatDivider />
            <StatItem>
              <StatNumber>15+</StatNumber>
              <StatLabel>Years Experience</StatLabel>
            </StatItem>
          </Statistics>
        </LeftContent>
        
        <RightContent>
          <ImageContainer>
            <HeroImage src={img} alt="HR Solutions" />
            <FloatingCard>
              <CardIcon>🚀</CardIcon>
              <CardText>Streamline Your HR Process</CardText>
            </FloatingCard>
            <FloatingCardTwo>
              <CardIcon>💪</CardIcon>
              <CardText>Empower Your Team</CardText>
            </FloatingCardTwo>
          </ImageContainer>
        </RightContent>
      </ContentWrapper>
    </HeroContainer>
  );
};

export default HeroSection;

const HeroContainer = styled.section`
  position: relative;
  min-height: 100vh;
  background: linear-gradient(135deg, #0A2540 0%, #1E4D7B 100%);
  overflow: hidden;
  padding: 2rem ;

  @media (max-width: 768px) {
    padding: 1rem;
    min-height: auto;
  }
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 20% 50%, rgba(74, 184, 241, 0.1) 0%, transparent 50%);
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 10px 20px;
  min-height: calc(100vh - 4rem);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    min-height: auto;
    gap: 2rem;
    padding: 2rem 0;
  }
`;

const LeftContent = styled.div`
  padding-right: 2rem;
  max-width: 600px;

  @media (max-width: 1024px) {
    padding-right: 0;
    text-align: center;
    max-width: 100%;
  }
`;

const MainHeading = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: white;
  line-height: 1.2;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HighlightText = styled.span`
  color: #4BB8F1;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 3px;
    background: #4BB8F1;
    border-radius: 2px;
  }
`;

const SubHeading = styled.p`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;

  @media (max-width: 1024px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
  }
`;

const BaseButton = styled(Link)`
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
`;

const PrimaryButton = styled(BaseButton)`
  background: #4BB8F1;
  color: white;
  
  &:hover {
    background: #3CA5E0;
    transform: translateY(-2px);
  }
`;

const SecondaryButton = styled(BaseButton)`
  background: transparent;
  color: white;
  border: 2px solid #4BB8F1;
  
  &:hover {
    background: rgba(75, 184, 241, 0.1);
    transform: translateY(-2px);
  }
`;

const RightContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

const HeroImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  display: block;
  object-fit: cover;
//   aspect-ratio: 4/3;
`;

const FloatingCard = styled.div`
  position: absolute;
  top: 15%;
  left: -15%;
  background: white;
  padding: 1rem 1.5rem;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  animation: float 6s ease-in-out infinite;
  z-index: 2;
  white-space: nowrap;

  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
  }

  @media (max-width: 1200px) {
    left: -5%;
    padding: 0.75rem 1rem;
  }
`;

const FloatingCardTwo = styled(FloatingCard)`
  top: auto;
  bottom: 15%;
  left: auto;
  right: -15%;
  animation-delay: -3s;

  @media (max-width: 1200px) {
    right: -5%;
  }
`;

const CardIcon = styled.span`
  font-size: 1.5rem;
  line-height: 1;
`;

const CardText = styled.span`
  color: #0A2540;
  font-weight: 600;
  font-size: 0.9rem;
  white-space: nowrap;

  @media (max-width: 1200px) {
    font-size: 0.8rem;
  }
`;

const Statistics = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  
  @media (max-width: 1024px) {
    justify-content: center;
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #4BB8F1;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
`;

const StatDivider = styled.div`
  width: 1px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);

  @media (max-width: 768px) {
    display: none;
  }
`;