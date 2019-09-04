import React from "react";
import styled from "styled-components";

const ProjectImg = styled.div`
  width: 100%;
  height: 250px;
  background-color: white;
  /* background: ${props => `url(${props.img}) no-repeat top center`}; */
  /* background-size: cover; */
  margin: 10px 0;
  border: 5px solid white;
`;

const ProjectDesc = styled.p`
  background-color: white;
`;

const SingleProject = props => {
  return (
    <>
      <ProjectImg></ProjectImg>
      <ProjectDesc></ProjectDesc>
    </>
  );
};

export default SingleProject;
