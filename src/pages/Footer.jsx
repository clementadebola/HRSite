import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <h3>About Us</h3>
          <p>
            We are a leading HR company dedicated to providing top-notch recruitment,
            training, and employee management services.
          </p>
        </FooterColumn>

        <FooterColumn>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </FooterColumn>

        <FooterColumn>
          <h3>Follow Us</h3>
          <SocialIcons>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </SocialIcons>
        </FooterColumn>

        <FooterColumn>
          <h3>Contact Us</h3>
          <p>Email: contact@hrcompany.com</p>
          <p>Phone: +123 456 7890</p>
        </FooterColumn>
      </FooterContent>

      <FooterBottom>
        <p>&copy; 2024 HR Company. All Rights Reserved.</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background-color: #0A2540;
  color: white;
  padding: 3rem 1rem 1.5rem;
  text-align: center;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const FooterColumn = styled.div`
  h3 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    color: #FFB347;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.6;
    color: #d0d8e1;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 0.5rem;

      a {
        color: #d0d8e1;
        text-decoration: none;
        font-size: 0.875rem;
        transition: color 0.3s ease;

        &:hover {
          color: #FFB347;
        }
      }
    }
  }
`;

const SocialIcons = styled.div`
  a {
    color: #d0d8e1;
    margin-right: 1rem;
    font-size: 1.25rem;
    transition: color 0.3s ease;

    &:hover {
      color: #FFB347;
    }
  }
`;

const FooterBottom = styled.div`
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #2c3e50;
  font-size: 0.875rem;
  color: #d0d8e1;
`;
