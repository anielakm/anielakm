import React from "react";
import styled from "styled-components";
import { theme } from "../utilis/theme";

const MainHeader = styled.div`
  background-color: ${theme.colors.baseBeige};
  height: 100vh;
  min-width: 300px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${theme.colors.darkBeige};
`;

const H1 = styled.h1`
  font-family: ${theme.fonts.gv};
  font-weight: 200;
  margin: 2px;
  font-size: 34px;

  @media (min-width: 768px) {
    font-size: 58px;
  }

  @media (min-width: 1024px) {
    font-size: 64px;
  }

  @media (min-width: 1224px) {
    font-size: 72px;
  }
`;

const H2 = styled.h2`
  font-weight: 200;
  font-size: 17px;
  margin: 10px 0;

  @media (min-width: 768px) {
    font-size: 24px;
  }

  @media (min-width: 1024px) {
    font-size: 26px;
  }

  @media (min-width: 1224px) {
    font-size: 29px;
  }
`;

const HR = styled.hr`
  border: 0.5px solid ${theme.colors.darkBeige};
  max-width: 650px;
  min-width: 100px;
  margin-top: 0px;
  margin-bottom: 0px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.35);

  @media (min-width: 380px) and (max-width: 768px) {
    width: 320px;
  }

  @media (min-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  -webkit-animation-name: fadein; /* Safari 4.0 - 8.0 */
  -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
  animation-name: fadein;
  animation-duration: 4s;

  /* Safari 4.0 - 8.0 */
  @-webkit-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Standard syntax */
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Header = () => {
  return (
    <>
      <MainHeader>
        <Container>
          <H1>Aniela Katana-Matłok</H1>

          <HR />

          <H2>Junior Front-end Developer</H2>
        </Container>
      </MainHeader>
    </>
  );
};

export default Header;
