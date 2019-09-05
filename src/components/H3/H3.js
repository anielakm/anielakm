import styled from "styled-components";
// import { theme } from "../../utilis/theme";

const H3 = styled.h3`
  color: ${({ light }) => (light ? "white" : "gray")};
  text-transform: uppercase;
  letter-spacing: ${({ small }) => (small ? "1px" : "2px")};
  font-weight: 400;
  text-align: center;
  padding: 0;
  margin: ${({ small }) => (small ? "10% 0 10%" : "8% 0 5%")};
  font-size: ${({ small }) => (small ? "16px" : "24px")};
  font-family: "lato";

  @media (min-width: 768px) {
    font-size: ${({ small }) => (small ? "22px" : "32px")};
    margin: ${({ small }) => (small ? "5% 0 5%" : "8% 0 5%")};
  }

  @media (min-width: 1224px) {
    margin: ${({ small }) => (small ? "1% 0 2%" : "8% 0 4%")};
  }
`;

export default H3;
