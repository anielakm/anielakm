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
    font-size: ${({ small }) => (small ? "22px" : "28px")};
    margin: ${({ small }) => (small ? " 3% " : "8% 0 5%")};
  }

  @media (min-width: 1224px) {
    margin: ${({ small }) => (small ? "3%" : "3% 0")};
    font-size: ${({ small }) => (small ? "20px" : "26px")};
  }
`;

export default H3;
