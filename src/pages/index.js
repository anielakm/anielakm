import React from "react";
import { createGlobalStyle } from "styled-components";
import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

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

const IndexPage = () => (
  <>
    <Global />
    <Header />
    <About />
    <Projects />
    <ContactForm />
    <Footer />
  </>
);

export default IndexPage;
