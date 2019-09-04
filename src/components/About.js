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
  @media (min-width: 769px) {
    width: 50%;
    float: right;
    background-color: ${theme.colors.baseBeige};
    padding: 10px;
    margin: 20% 3%;
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
            Pozostałe zainteresowania, które realizuję w czasie wolnym to:
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
