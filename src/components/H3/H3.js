import styled from "styled-components";
// import { theme } from "../../utilis/theme";

const H3 = styled.h3`
  color: gray;
  text-transform: uppercase;
  letter-spacing: ${({ small }) => (small ? "1px" : "2px")};
  font-weight: 400;
  text-align: center;
  padding: 0;
  margin: ${({ small }) => (small ? "0px 0px 10px" : "15px 0 10px")};
  font-size: ${({ small }) => (small ? "16px" : "24px")};
  font-family: "lato";

  @media (min-width: 1224px) {
    font-size: 36px;
  }
`;

export default H3;
