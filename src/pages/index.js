import React from "react";
import { createGlobalStyle } from "styled-components";
import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
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
    <Contact />
    <Footer />
  </>
);

export default IndexPage;
