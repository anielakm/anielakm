import styled from "styled-components";
import { theme } from "../../utilis/theme";

const Text = styled.p`
  color: gray;
  font-weight: 300;
  text-align: justify;
  font-size: 16px;
  font-family: ${theme.fonts.lato};
  margin: 0;
  font-weight: 300;

  @media (min-width: 768px) {
    font-size: 22px;
  }

  @media (min-width: 1024px) {
    font-size: ${({ small }) => (small ? "14px" : "18px")};
  }

  @media (min-width: 1224px) {
    font-size: ${({ small }) => (small ? "17px" : "20px")};
  }
`;

export default Text;
