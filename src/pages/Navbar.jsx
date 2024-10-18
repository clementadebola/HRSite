import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <Logo>HR</Logo>
      <Hamburger onClick={toggleMenu} isOpen={isOpen}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuItem>
          <StyledLink to="/" onClick={() => setIsOpen(false)}>Home</StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/about" onClick={() => setIsOpen(false)}>About Us</StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/services" onClick={() => setIsOpen(false)}>Services</StyledLink>
        </MenuItem>
        <MenuItem>
          <ContactButton onClick={() => setIsOpen(false)}>Contact</ContactButton>
        </MenuItem>
      </Menu>
      {isOpen && <Overlay onClick={() => setIsOpen(false)} />}
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0A2540;
  padding: 1rem 2rem;
  position: relative;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  z-index: 2;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    background-color: #0A2540;
    padding: 5rem 2rem 2rem 2rem;
    width: 70%;
    max-width: 300px;
    transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
    z-index: 100;
    visibility: ${({ isOpen }) => isOpen ? 'visible' : 'hidden'};
  }
`;

const MenuItem = styled.li`
  margin-left: 2rem;

  @media (max-width: 768px) {
    margin: 1.5rem 0;
    width: 100%;
    text-align: center;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1rem;
  position: relative;
  padding: 0.5rem 0;
  display: block;

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #4BB8F1;
    transition: width 0.3s ease-in-out;
  }

  &:hover {
    color: #4BB8F1;
    
    &:after {
      width: 100%;
    }
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  z-index: 102;

  span {
    height: 2px;
    width: 25px;
    background: white;
    margin-bottom: 4px;
    border-radius: 5px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ isOpen }) => isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
      transform: ${({ isOpen }) => isOpen ? 'translateX(-20px)' : 'translateX(0)'};
    }

    &:nth-child(3) {
      transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'rotate(0)'};
    }
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const ContactButton = styled.button`
  background-color: #4BB8F1;
  color: white;
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3a93c4;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.75rem 1.5rem;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
  z-index: 99;

  @media (max-width: 768px) {
    display: block;
  }
`;