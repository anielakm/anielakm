import React from "react";
import styled from "styled-components";
import { theme } from "../utilis/theme";
import H3 from "../components/H3/H3";

const ContactContainer = styled.div`
  background-color: ${theme.colors.darkBeige};
  padding: 3%;
  font-family: ${theme.fonts.lato};
`;

const Form = styled.form`
  width: 80%;
  margin: 0 10%;
`;

const Inputs = styled.div`
  background-color: ${theme.colors.baseBeige};
  opacity: 0.9;
  padding: 5%;
  margin: 1% 0;
  input {
    margin: 2% 0;
    width: 100%;
    color: gray;
    padding: 2%;
    font-size: 12px;
  }
`;

const Message = styled.div`
  background-color: ${theme.colors.baseBeige};
  opacity: 0.9;
  padding: 5%;
  margin: 1% 0;

  textarea {
    width: 100%;
    color: gray;
    padding: 2%;
    font-size: 12px;
    height: 150px;
  }

  button {
    background-color: ${theme.colors.darkBeige};
    border: 1px solid ${theme.colors.darkBeige};
    width: 100%;
    color: white;
    letter-spacing: 1px;
    font-weight: 400;
    font-size: 11px;
    text-transform: uppercase;
    line-height: 24px;
    margin-top: 2%;
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
