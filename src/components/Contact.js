import React from "react";
import styled from "styled-components";
import { theme } from "../utilis/theme";
import H3 from "../components/H3/H3";
import Recaptcha from "react-recaptcha";

const ContactContainer = styled.div`
  background-color: ${theme.colors.darkBeige};
  padding: 3% 5%;
  font-family: ${theme.fonts.lato};

  @media (min-width: 1024px) {
    padding: 1% 2% 2% 2%;
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
`;

const Inputs = styled.div`
  background-color: ${theme.colors.baseBeige};
  opacity: 0.9;
  padding: 5%;
  margin: 1% 0;
  border-radius: 5px;

  text-align: center;

  div {
    margin: auto;
    padding: auto;
  }

  input {
    margin: 0 0 3% 0;
    width: 304px;

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
    width: auto;
    justify-content: center;
    align-items: center;
    padding: 2%;
    input {
      width: 304px;
    }
  }
`;

const Message = styled.div`
  background-color: ${theme.colors.baseBeige};
  opacity: 0.9;
  padding: 5%;
  margin: 1% 0;
  text-align: center;
  border-radius: 5px;

  @media (min-width: 768px) {
  }

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
      padding: 2%;
      line-height: 18px;
      width: 304px;
    }
    @media (min-width: 1024px) {
      padding: 2%;
      line-height: 18px;
      width: 100%;
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
      font-size: 10px;
      letter-spacing: 2px;
      margin-top: 4%;
      padding: 2% 4%;
    }
  }

  @media (min-width: 1024px) {
    padding: 2%;
    margin: 1%;
    width: 50%;
    button {
      font-size: 11px;
    }
  }

  @media (min-width: 1224px) {
    width: 600px;
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
            <br />
            <input type="text" placeholder="e-mail" />
            <Recaptcha sitekey="6LeF6HkUAAAAAJnN8s1a8d4GgB3OFN-m0uBJA6IV" />
          </Inputs>
          <Message>
            <textarea placeholder="Treść wiadomości ..."></textarea>
            <br />
            <button>Wyślij wiadomość</button>
          </Message>
        </Form>
      </ContactContainer>
    </>
  );
};

export default Contact;
