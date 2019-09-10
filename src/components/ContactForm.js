import React from 'react'
import Recaptcha from 'react-google-recaptcha'
import styled from "styled-components";
import { theme } from "../utilis/theme";
import H3 from "../components/H3/H3";

const Success = styled.aside`
display:none;
position:fixed;
height:100vh;
width:100vw;
background-color:rgba(0,0,0,0.35);
top:0;
left:0;
z-index:2;

div{
border-radius:10px;
display:block;
background-color:white;
z-index:99;
min-height:15vh;
min-width:30%;
text-align:center;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
padding:2%;

  position: fixed;
    top: 50%;
    left: 50%;
    width: auto;
    height: auto;
    -webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    -o-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);

    p{
      padding:1%;
      color:gray;
    }
    
    span{
      position:absolute;
      right:-3%;
      top:-5%;
      background-color:${theme.colors.baseBeige};
      
      border-radius:50px;
      color:gray;
      text-align:center;
      line-height:22px;
      padding:2% 3%;
      font-weight:500;
      font-size:22px;
    }}

`;

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
  margin: 1%;
  border-radius: 5px;
  label{
      font-size:14px;
        padding:8% 1%;
      color: gray;
  input {
    margin: 2% 0 3% 0;
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
      margin: 3% 0 4% 0;
      font-size: 14px;
      padding: 2%;
      line-height: 22px;
      
    }
  }
  }
  div {
    margin: auto;
    padding: auto;
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
    min-width:304px;
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
      background-color: rgba(255, 255, 255, 0.3);
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


const RECAPTCHA_KEY = process.env.GATSBY_APP_SITE_RECAPTCHA_KEY
if (typeof RECAPTCHA_KEY === 'undefined') {
  throw new Error(`
  Env var GATSBY_APP_SITE_RECAPTCHA_KEY is undefined! 
  You probably forget to set it in your Netlify build environment variables. 
  Make sure to get a Recaptcha key at https://www.netlify.com/docs/form-handling/#custom-recaptcha-2-with-your-own-settings
  Note this demo is specifically for Recaptcha v2
  `)
}

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function ContactForm() {
  const [state, setState] = React.useState({})
  const recaptchaRef = React.createRef()

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const recaptchaValue = recaptchaRef.current.getValue()
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        'g-recaptcha-response': recaptchaValue,
        ...state,
      }),
    })
      .then(() => document.querySelector('.success').style.display = 'block')
      .catch((error) => alert(error))
  }

  const handleClose = () => {
    document.querySelector('.success').style.display = 'none';
  }


  return (
    <ContactContainer>
      <Success className="success" onClick={handleClose}><div><H3>Wiadomość wysłana</H3><p>Dziękuję, wiadomość została wysłana poprawnie.</p><span onClick={handleClose}>x</span></div></Success>
      <H3 light>Kontakt</H3>
      <Form
        name="contact-recaptcha"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-recaptcha="true"
        onSubmit={handleSubmit}
      >
        <noscript>
          <p>This form won’t work with Javascript disabled</p>
        </noscript>

        <Inputs>

          <label > Imię: <br />
            <input type="text" name="name" onChange={handleChange} placeholder="imię" />
          </label>
          <br />

          <label htmlFor="">E-mail: <br />
            <input type="email" name="email" onChange={handleChange} placeholder="email" />
          </label>

          <br /> <label>  <Recaptcha ref={recaptchaRef} sitekey={RECAPTCHA_KEY} /></label>

        </Inputs>


        <Message>

          <br />
          <textarea name="message" onChange={handleChange} placeholder="Treść wiadomości ..." /> <br />
          <button type="submit">Wyślij wiadomość</button>

        </Message>
      </Form>
    </ContactContainer>
  )
}
