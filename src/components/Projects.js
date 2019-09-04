import React from "react";
// import SingleProject from "../components/SingleProject";
import H3 from "../components/H3/H3";
import styled from "styled-components";
import { theme } from "../utilis/theme";
import { StaticQuery, graphql } from "gatsby";

const ContainerProjects = styled.div`
  background-color: ${theme.colors.pistachio};
  padding: 20px;
`;

// const portfolioCommercial = theme.imagesCommercial.map(item => (
//   <SingleProject img={item} />
// ));
// const portfolioNonCommercial = theme.imagesNoncommercial.map(item => (
//   <SingleProject img={item} />
// ));

const Projects = props => (
  <StaticQuery
    query={graphql`
      {
        allUtilisJson {
          edges {
            node {
              projects {
                name
                description
                technology
                isCommercial
                img {
                  src {
                    childImageSharp {
                      fluid(quality: 100) {
                        src
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <header>
        <ContainerProjects>
          {console.log("data: ", data)}
          <H3>Portfolio</H3>
          <H3 small>Projekty komercyjne</H3>
          <H3 small>Projekty niekomercyjne</H3>
        </ContainerProjects>
      </header>
    )}
  />
);

export default Projects;
