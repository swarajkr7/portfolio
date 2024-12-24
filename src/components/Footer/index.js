import React from "react";
import styled from "styled-components";

const FooterSection = styled.footer`
  background-color:rgb(0, 0, 0);
  color: white;
  padding: 40px 20px;
  text-align: center;
`;

const FooterTitle = styled.h2`
  color: #c084fc;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const FooterNav = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  margin: 0 15px;
  font-size: 1rem;

  &:hover {
    color: #c084fc;
    text-decoration: underline;
  }
`;

const SocialIcons = styled.div`
  margin: 20px 0;

  a {
    margin: 0 10px;
    color: white;
    font-size: 1.5rem;

    &:hover {
      color: #c084fc;
    }
  }
`;

const Copyright = styled.p`
  font-size: 0.875rem;
  color: #aaa;
`;

const Footer = () => {
  return (
    <FooterSection>
      <FooterTitle>Sswaraj Kumar</FooterTitle>
      <FooterNav>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#skills">Skills</NavLink>
        <NavLink href="#experience">Experience</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#education">Education</NavLink>
      </FooterNav>
      <SocialIcons>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </SocialIcons>
      <Copyright>
        © 2024 Sswaraj Kumar. All rights reserved.
      </Copyright>
    </FooterSection>
  );
};

export default Footer;
