import React from "react";
import styled from "styled-components";
// import { theme } from "../utilis/theme";
import Text from "../components/Text/Text";

const ProjectImg = styled.div`
  height: 250px;
  background-color: white;
  background: url(${props => props.src}) no-repeat top center;
  background-size: cover;
  margin: 10px 0;
  border: 5px solid white;

  transition: background-position 3s;
  :hover {
    background-position: bottom;
  }

  @media (min-width: 768px) {
    height: 300px;
  }

  @media (min-width: 1024px) {
    height: 300px;
  }
`;

const ProjectDesc = styled.div`
  background-color: white;
  padding: 8%;
`;

const ProjectContainer = styled.div`
  @media (min-width: 768px) {
    width: 48%;
    margin: 1%;
  }
  @media (min-width: 1024px) {
    width: 31%;
    margin: 1%;
  }
`;

const SingleProject = props => {
  return (
    <ProjectContainer>
      <ProjectImg src={props.img.src.childImageSharp.fluid.src}></ProjectImg>
      <ProjectDesc>
        <Text small>{props.desc}</Text>
        <br />
        <Text small>{props.tech}</Text>
      </ProjectDesc>
    </ProjectContainer>
  );
};

export default SingleProject;
