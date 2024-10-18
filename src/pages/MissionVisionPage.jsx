import React from 'react';
import styled from 'styled-components';
import img from "../assets/mission.jpg"


const MissionVisionPage = () => {
  return (
    <Container>
      <Header>
        <HeaderContent>
          <Title>Our Vision & Mission</Title>
          <Underline />
        </HeaderContent>
      </Header>

      <MainContent>
        <Grid>
          <TextContent>
            <ContentCard>
              <h2>Vision</h2>
              <p>
                To be the global leader in innovative solutions that transform businesses 
                and empower communities. We envision a future where technology and human 
                creativity converge to solve the world's most pressing challenges.
              </p>
            </ContentCard>

            <ContentCard>
              <h2>Mission</h2>
              <p>
                Our mission is to deliver exceptional value through innovative solutions 
                that drive sustainable growth for our clients. We commit to:
              </p>
              <ul>
                <li>Fostering innovation and creative problem-solving</li>
                <li>Building lasting partnerships with our clients</li>
                <li>Maintaining the highest standards of excellence</li>
                <li>Investing in our team's growth and development</li>
              </ul>
            </ContentCard>
          </TextContent>

          <ImageContainer>
            <Overlay className="top-right" />
            <StyledImage src={img} alt="Team collaboration" />
            <Overlay className="bottom-left" />
          </ImageContainer>
        </Grid>

        <ValuesSection>
          <h2>Our Core Values</h2>
          <ValuesGrid>
            {[
              { title: "Innovation", description: "Constantly pushing boundaries and embracing new ideas" },
              { title: "Integrity", description: "Maintaining the highest ethical standards in all we do" },
              { title: "Excellence", description: "Delivering outstanding results that exceed expectations" }
            ].map((value, index) => (
              <ContentCard key={index}>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </ContentCard>
            ))}
          </ValuesGrid>
        </ValuesSection>
      </MainContent>
    </Container>
  );
};


const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom, #165999FF, white);
`;

const Header = styled.div`
  width: 100%;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 16px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #1a202c;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Underline = styled.div`
  width: 80px;
  height: 4px;
  background-color: #f6ad55;
  margin-top: 8px;
`;

const MainContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 16px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const ContentCard = styled.div`
  background-color: white;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;


  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }

  h2, h3 {
    font-size: 1.75rem;
    font-weight: 600;
    color: #1a202c;
  }

  p {
    color: #4a5568;
    margin-top: 8px;
  }

  ul {
    margin-top: 16px;
    padding-left: 20px;
    list-style-type: disc;

    li {
      margin-bottom: 8px;
      color: #4a5568;
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 10;
`;

const Overlay = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: rgba(255, 165, 0, 0.5);
  opacity: 0.5;

  &.top-right {
    top: -20px;
    right: -20px;
  }

  &.bottom-left {
    bottom: -20px;
    left: -20px;
  }
`;

const ValuesSection = styled.div`
  margin-top: 64px;
  
  h2 {
    font-size: 1.75rem;
    font-weight: 600;
    color: #1a202c;
    margin-bottom: 32px;
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default MissionVisionPage;
