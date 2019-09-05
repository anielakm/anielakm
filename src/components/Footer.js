import React from "react";
import styled from "styled-components";
import { theme } from "../utilis/theme";

const FooterContainer = styled.div`
  background-color: ${theme.colors.darkBeige};
  font-family: ${theme.fonts.lato};
  color: rgba(255, 255, 255, 0.8);
  letter-spacing: 1px;
  font-size: 10px;
  text-align: center;
  padding: 2%;
`;
const Footer = () => {
  return (
    <>
      <FooterContainer>
        Template created by Aniela Katana-Matłok. All rights reserved.
      </FooterContainer>
    </>
  );
};

export default Footer;
