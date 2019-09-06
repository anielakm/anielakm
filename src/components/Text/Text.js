import styled from "styled-components";
import { theme } from "../../utilis/theme";

const Text = styled.p`
  color: gray;
  font-weight: 200;
  text-align: justify;
  font-size: 16px;
  font-family: ${theme.fonts.open};
  margin: 0;

  @media (min-width: 768px) {
    font-size: 22px;
  }

  @media (min-width: 1024px) {
    font-size: ${({ small }) => (small ? "14px" : "16px")};
  }

  @media (min-width: 1224px) {
    font-size: ${({ small }) => (small ? "15px" : "18px")};
    padding: ${({ small }) => (small ? "0" : "2%")};
  }
`;

export default Text;
