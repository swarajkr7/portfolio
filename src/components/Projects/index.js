import React, { useState } from 'react';
import styled from 'styled-components';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';

const Container = styled.div`
  background: linear-gradient(
  343.07deg,
  regba(132, 59, 206, 0.06) 5.71%,
  regba(132, 59 206, 0) 64.83%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%); 
`;

const Wrapper = styled.div`
  max-width: 1350px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 12px;
  padding: 10px 0px 100px 0;
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  max-width: 600px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ToggleGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ToggleButton = styled.div`
  padding: 8px 18px;
  cursor: pointer;
  border-radius: 6px;

  ${({ active, theme }) =>
    active &&
    `
    background-color: ${theme.primary + 20};
  `}

  &:hover {
    background-color: ${({ theme }) => theme.primary + 8};
  }

  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
`;

const Divider = styled.div`
  width: 1.5px;
  background-color: ${({ theme }) => theme.primary};
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 28px;
`;

const Projects = () => {
  const [toggle, setToggle] = useState("all");

  const categories = ["all", "web app", "android app", "machine learning"];

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android
          apps. Here are some of my projects.
        </Desc>

        <ToggleGroup>
          {categories.map((category, index) => (
            <>
              <ToggleButton
                key={category}
                active={toggle === category}
                onClick={() => setToggle(category)}
              >
                {category.toUpperCase().replace("_", " ")}
              </ToggleButton>
              {index < categories.length - 1 && <Divider />}
            </>
          ))}
        </ToggleGroup>

        <CardContainer>
          {projects
            .filter((item) => toggle === "all" || item.category === toggle)
            .map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
