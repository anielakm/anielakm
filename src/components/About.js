import React from "react";
import styled from "styled-components";
import Image from "../utilis/images/about_small.jpg";
import ImageAbout from "../utilis/images/about.jpg";
import { theme } from "../utilis/theme";
import H3 from "../components/H3/H3";
import Text from "../components/Text/Text";
import Highlight from "../components/Highlight/Highlight";

const AboutContainer = styled.div`
  background-color: ${theme.colors.baseBeige};
  position: relative;

  @media (min-width: 769px) {
    background-image: url(${ImageAbout});
    background-size: cover;
    height: 100vh;
  }
`;

const Img = styled.img`
  max-width: 100%;

  @media (min-width: 769px) {
    display: none;
  }
`;

const AboutText = styled.div`
  padding: 0 8% 8%;

  @media (min-width: 769px) {
    margin: 0;
    position: absolute;
    top: 35%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    right: 0;
    width: 50%;
    background-color: ${theme.colors.baseBeige};
  }
  @media (min-width: 1024px) {
    margin: 10% 3%;
    padding: 0 3% 4%;
  }
  @media (min-width: 1224px) {
    margin: 10% 3%;
    padding: 0 3% 4%;
    width: 40%;
  }
`;

const About = () => {
  return (
    <>
      <AboutContainer>
        <Img src={Image} alt="about_me" />
        <AboutText>
          <H3>O mnie</H3>
          <Text>
            Jestem na ostatnim roku studiów magisterskich na kierunku{" "}
            <Highlight>Informatyka i Ekonometria</Highlight>. Moja praca
            licencjacka była poświęcona{" "}
            <Highlight>technologiom frontendowym</Highlight>, a dokładniej
            narzędziom wspomagającym automatyczne tworzenie kodu po stronie
            klienta. <br />
            <br />
            Moja dotychczasowa edukacja z zakresu Informatyki i Ekonometrii
            pozwolila mi nabyć{" "}
            <Highlight>wiedzę oraz cenne umiejetności</Highlight>, które obecnie
            wykorzystuję w{" "}
            <Highlight>realizowanych przeze mnie projektach</Highlight>.
            <br />
            <br />
            Pozostałe zainteresowania, które realizuję w czasie wolnym to:{" "}
            <Highlight>tworzenie oraz montaż filmów</Highlight>,{" "}
            <Highlight>marketing internetowy</Highlight>,{" "}
            <Highlight>personal branding</Highlight> oraz{" "}
            <Highlight>kosmetologia</Highlight>.
          </Text>
        </AboutText>
      </AboutContainer>
    </>
  );
};

export default About;
