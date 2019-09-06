module.exports = {
  siteMetadata: {
    title: `Anielakm Portfolio`,
    description: `Jestem na ostatnim roku studiów magisterskich na kierunku Informatyka i Ekonometria. Moja praca licencjacka była poświęcona technologiom frontendowym, a dokładniej narzędziom wspomagającym automatyczne tworzenie kodu po stronie klienta. Moja dotychczasowa edukacja z zakresu Informatyki i Ekonometrii pozwolila mi nabyć wiedzę oraz cenne umiejetności, które obecnie wykorzystuję w realizowanych przeze mnie projektach.`,
    author: `Aniela Katana-Matłok`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-json`,
    `gatsby-plugin-recaptcha`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/utilis`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/utilis/images`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `${__dirname}/src/utilis/images/ikonka.png`
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
