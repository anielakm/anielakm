import styled from "styled-components";
import { theme } from "../../utilis/theme";

const Button = styled.button`
  margin: ${({ git }) => (git ? "3% 1% 0" : "10% 1% 0")};

  background-color: ${({ git }) =>
    git ? theme.colors.darkBeige : theme.colors.baseBeige};
  border: 2px solid
    ${({ git }) => (git ? theme.colors.darkBeige : theme.colors.baseBeige)};
  border-radius: 30px;
  padding: 4% 9%;
  font-weight: 600;
  a {
    color: ${({ git }) => (git ? "white" : "gray")};
    text-decoration: none;
  }

  letter-spacing: 1px;
  font-weight: 400;
  font-size: 10px;
  text-transform: uppercase;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
  outline: none;

  transition: background-color 1s, color 0.5s, box-shadow 1s, margin 0.5s;

  :hover {
    cursor: pointer;

    background-color: transparent;

    a {
      color: ${theme.colors.darkBeige};
    }
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
  }

  @media (min-width: 768px) {
    font-size: 12px;
    padding: 3% 6%;
  }
  @media (min-width: 1024px) {
    font-size: 10px;
    padding: 3% 8%;
  }
  @media (min-width: 1224px) {
    font-size: 10px;
    padding: 3% 8%;
  }
`;

export default Button;
