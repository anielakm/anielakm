import React from "react"
import SEO from "../components/seo"
import { createGlobalStyle } from "styled-components";
import styled from 'styled-components'
import { theme } from '../utilis/theme'
import { Link } from 'gatsby'

const Global = createGlobalStyle`
body{
  padding:0;
  margin:0;
  font-family: 'Montserrat';
}
*, *::before, *::after{
  box-sizing:border-box;
}
`;

const NotFound = styled.div`
background-color:${theme.colors.pistachio};
height:100vh;
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

h2{
color:${theme.colors.darkBeige};
font-family:${theme.fonts.lato};
font-weight:500;
text-transform:uppercase;
letter-spacing:2px;
font-size:20px;
}

p{
color:gray;
margin:0;
font-size:12px;
letter-spacing:2px;
font-weight:200;
font-family:${theme.fonts.lato}
}

a{
  text-decoration:none;
  color:white;
  background-color:${theme.colors.darkBeige};
  border: 2px solid ${theme.colors.darkBeige};
  font-family:${theme.fonts.lato};
  padding:2% 4%;
  margin:4%;
  font-weight:400;
  text-transform:uppercase;
  font-size:11px;
  letter-spacing:2px;
  line-height:18px;
  border-radius:40px;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.15);
  

  transition: background-color 1s, color 1s, margin .5s, box-shadow 0.5s;

  :hover{
    cursor:pointer;
    background-color:transparent;
    color:${theme.colors.darkBeige};
    box-shadow: 2px 2px 5px rgba(0,0,0,0.25);
  }

  
}

@media(min-width:768px){
    h2{font-size:30px};
    p{font-size:18px};
    a{font-size:18px;line-height:24px;}
  }

  @media(min-width:1024px){
    h2{font-size:30px};
    p{font-size:18px};
    a{font-size:15px;line-height:16px;padding:1% 2%; margin:2%; :hover{margin-top:1.5%; margin-bottom:2.5%;}}
  }

`;



const NotFoundPage = () => (
  <NotFound>
    <Global />
    <SEO title="404: Not found" />
    <h2>Błąd wczytywania</h2>
    <p>Strona o podanym adresie nie istnieje</p>
    <Link href="/">Powrót</Link>
  </NotFound>
)

export default NotFoundPage
