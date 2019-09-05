import React from "react";
import styled from "styled-components";
import { theme } from "../utilis/theme";
import H3 from "../components/H3/H3";

const ContactContainer = styled.div`
  background-color: ${theme.colors.darkBeige};
  padding: 3%;
  font-family: ${theme.fonts.lato};

  @media (min-width: 1024px) {
    padding: 1% 2% 2% 2%;
  }
`;

const Form = styled.form`
  width: 70%;
  margin: 0 15%;

  @media (min-width: 1024px) {
    display: flex;
  }
`;

const Inputs = styled.div`
  background-color: ${theme.colors.baseBeige};
  opacity: 0.9;
  padding: 5%;
  margin: 1% 0;
  border-radius: 5px;
  opacity: 0.9;

  input {
    margin: 0 0 3% 0;
    width: 100%;
    color: gray;
    padding: 3%;
    font-size: 12px;
    border: none;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);

    &:active,
    &:focus {
      outline: 1px solid ${theme.colors.darkBeige};
      border: 1px solid ${theme.colors.darkBeige};
    }

    @media (min-width: 768px) {
      margin: 0 0 4% 0;
      font-size: 14px;
      padding: 2%;
      line-height: 22px;
    }
  }

  @media (min-width: 1024px) {
    padding: 3%;
    width: 38%;
  }
`;

const Message = styled.div`
  background-color: ${theme.colors.baseBeige};
  opacity: 0.9;
  padding: 5%;
  margin: 1% 0;
  text-align: center;
  border-radius: 5px;
  opacity: 0.9;

  textarea {
    width: 100%;
    color: gray;
    padding: 4%;
    font-size: 12px;
    height: 150px;
    border: none;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
    &:active,
    &:focus {
      outline: 1px solid ${theme.colors.darkBeige};
      border: 1px solid ${theme.colors.darkBeige};
    }

    @media (min-width: 768px) {
      font-size: 14px;
      padding: 2%;
      line-height: 18px;
    }
  }

  button {
    background-color: ${theme.colors.darkBeige};
    border: 2px solid ${theme.colors.darkBeige};
    border-radius: 30px;
    padding: 4% 9%;
    color: white;
    letter-spacing: 1px;
    font-weight: 400;
    font-size: 10px;
    text-transform: uppercase;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.15);

    margin-top: 4%;
    outline: none;

    transition: background-color 1s, color 0.3s, font-weight 0.3s, box-shadow 1s;

    :hover {
      background-color: ${theme.colors.baseBeige};
      color: ${theme.colors.darkBeige};
      cursor: pointer;
      font-weight: 500;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
    }

    @media (min-width: 768px) {
      font-size: 12px;
      letter-spacing: 2px;
      margin-top: 4%;
      padding: 2% 4%;
    }
  }

  @media (min-width: 1024px) {
    padding: 3%;
    width: 58%;
    margin: 1%;

    button {
      font-size: 11px;
    }
  }
`;

const Contact = () => {
  return (
    <>
      <ContactContainer>
        <H3 light>Kontakt</H3>
        <Form method="post">
          <Inputs>
            <input type="text" placeholder="name" />
            <input type="text" placeholder="e-mail" />
          </Inputs>
          <Message>
            <textarea placeholder="Treść wiadomości ..."></textarea>
            <button>Wyślij wiadomość</button>
          </Message>
        </Form>
      </ContactContainer>
    </>
  );
};

export default Contact;
