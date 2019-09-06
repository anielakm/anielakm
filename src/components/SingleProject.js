import React from "react";
import styled from "styled-components";
import Text from "../components/Text/Text";
import Highlight from "../components/Highlight/Highlight";
import Button from "../components/Button/Button";

const ProjectImg = styled.div`
  height: 250px;
  background-color: white;
  background: url(${props => props.src}) no-repeat top center;
  background-size: cover;
  border: 5px solid white;

  transition: background-position 3s;
  :hover {
    background-position: bottom;
  }

  @media (min-width: 768px) {
    height: 200px;
  }

  @media (min-width: 1024px) {
    height: 180px;
  }

  @media (min-width: 1224px) {
    height: 220px;
  }
  @media (min-width: 1424px) {
    height: 250px;
  }
`;

const ProjectDesc = styled.div`
  padding: 7%;
`;

const ProjectContainer = styled.div`
  .center {
    text-align: center;
  }

  background-color: rgba(255, 255, 255, 0.8);

  margin-bottom: 6%;
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
      <a href={props.url} target="blank">
        <ProjectImg src={props.img.src.childImageSharp.fluid.src}></ProjectImg>
      </a>
      <ProjectDesc>
        {" "}
        <Text small>
          {" "}
          <Highlight>{props.desc}</Highlight>
        </Text>
        <br />
        <Text small>{props.tech}</Text>
        <div className="center">
          <Button>
            <a href={props.url}>Przejdź na stronę</a>
          </Button>
          {props.urlGithub === "none" ? null : (
            <Button git>
              <a href={props.urlGithub} target="blank">
                Kod Github
              </a>
            </Button>
          )}
        </div>
      </ProjectDesc>
    </ProjectContainer>
  );
};

export default SingleProject;
