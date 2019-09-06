import React from "react";
import SingleProject from "../components/SingleProject";
import H3 from "../components/H3/H3";
import styled from "styled-components";
import { theme } from "../utilis/theme";
import { StaticQuery, graphql } from "gatsby";

const ContainerProjects = styled.div`
  background-color: ${theme.colors.pistachio};
  padding: 20px;

  @media (min-width: 1024px) {
    padding-bottom: 5%;
  }
`;

const ProjectsList = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
  @media (min-width: 1024px) {
    padding: 0 15%;
  }
`;
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
                url
                urlGithub
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
          <H3>Portfolio</H3>
          <H3 small>Projekty komercyjne</H3>
          <ProjectsList>
            {data.allUtilisJson.edges[0].node.projects
              .filter(item => item.isCommercial)
              .map(item => (
                <SingleProject
                  key={item.name}
                  name={item.name}
                  desc={item.description}
                  tech={item.technology}
                  img={item.img}
                  url={item.url}
                  urlGithub={item.urlGithub}
                />
              ))}
          </ProjectsList>

          <H3 small>Projekty niekomercyjne</H3>

          <ProjectsList>
            {data.allUtilisJson.edges[0].node.projects
              .filter(item => !item.isCommercial)
              .map(item => (
                <SingleProject
                  key={item.name}
                  name={item.name}
                  desc={item.description}
                  tech={item.technology}
                  img={item.img}
                  url={item.url}
                  urlGithub={item.urlGithub}
                />
              ))}
          </ProjectsList>
        </ContainerProjects>
      </header>
    )}
  />
);

export default Projects;
