import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 HR Company. All Rights Reserved.</p>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background-color: #0A2540;
  color: white;
  padding: 1.5rem 0;
  text-align: center;
`;
